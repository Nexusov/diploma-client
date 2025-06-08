declare module 'next-auth' {
    interface Session {
        jwt?: {
            access: string;
            refresh: string;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        access?: string;
        refresh?: string;
    }
}
