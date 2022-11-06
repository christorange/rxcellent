import { type QueryClientConfig, QueryClient } from '@tanstack/react-query';

export const ReactQueryBaseConfig: QueryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            staleTime: 3000,
            retry: false
        }
    }
};

export const queryClient = new QueryClient(ReactQueryBaseConfig);
