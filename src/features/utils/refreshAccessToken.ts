import { AxiosResponse } from 'axios';
import apiClient from '@/features/utils/baseApi';

type RefreshAccessTokenResponseApi = {
    access: string;
};

export const refreshAccessToken = async (
    refresh: string,
): Promise<RefreshAccessTokenResponseApi> => {
    return apiClient
        .post('/api/token/refresh/', { refresh })
        .then((res: AxiosResponse<RefreshAccessTokenResponseApi>) => res.data);
};
