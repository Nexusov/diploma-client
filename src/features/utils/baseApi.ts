import { getSession, signOut, signIn } from 'next-auth/react';
import axios from 'axios';
import { refreshAccessToken } from './refreshAccessToken';

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const isBrowser = typeof window !== 'undefined';

let token = isBrowser ? localStorage.getItem('token') : null;

const instanceCreate = () => {
    const instance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!isBrowser) {
        return instance;
    }

    instance.interceptors.request.use(async (config) => {
        const session = await getSession();
        if (session) {
            config.headers.Authorization = `Bearer ${session.jwt.access}`;
            token = session.jwt.access;
            return config;
        }
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        }
        return config;
    });

    instance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const { response } = error;
            if (response?.status === 401) {
                const session = await getSession();
                if (session) {
                    const { access } = await refreshAccessToken(session.jwt.refresh);
                    if (access && access !== session.jwt.access) {
                        await signIn('tokens', {
                            ...session.jwt,
                            access,
                            redirect: false,
                        });
                    }
                    const originalRequest = error.config;
                    originalRequest.headers.Authorization = `Bearer ${access}`;
                    return instance(originalRequest);
                }
                await signOut();
            }

            return Promise.reject(error);
        },
    );

    return instance;
};

const apiClient = instanceCreate();

export default apiClient;
