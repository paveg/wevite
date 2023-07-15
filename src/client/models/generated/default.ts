/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Server
 * OpenAPI spec version: 1.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  UsersIndexResponse
} from './api.schemas'



export const getApiPUsers = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<UsersIndexResponse>> => {
    return axios.get(
      `/api/p/users`,options
    );
  }


export const getGetApiPUsersQueryKey = () => [`/api/p/users`] as const;
  

    
export const getGetApiPUsersQueryOptions = <TData = Awaited<ReturnType<typeof getApiPUsers>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiPUsers>>, TError, TData>, axios?: AxiosRequestConfig}
): UseQueryOptions<Awaited<ReturnType<typeof getApiPUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPUsersQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPUsers>>> = ({ signal }) => getApiPUsers({ signal, ...axiosOptions });
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiPUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPUsers>>>
export type GetApiPUsersQueryError = AxiosError<unknown>

export const useGetApiPUsers = <TData = Awaited<ReturnType<typeof getApiPUsers>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiPUsers>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiPUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

