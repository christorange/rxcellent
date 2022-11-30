import type {
    UseMutationOptions,
    UseMutationResult,
    UseQueryOptions,
    UseQueryResult
} from '@tanstack/react-query';

export type WithParamsQueryService<P = any, R = any> = (
    params: P,
    options?: UseQueryOptions<R>
) => UseQueryResult<R>;

export type MutationService<R = any, P = any, E = any> = (
    options?: UseMutationOptions<R, E, P>
) => UseMutationResult<R, E, P>;
