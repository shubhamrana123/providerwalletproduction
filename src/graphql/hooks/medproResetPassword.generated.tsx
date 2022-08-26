import * as Types from '..//types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MedproResetpasswordQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
  userType?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type MedproResetpasswordQuery = { __typename?: 'Query', resetPassword?: string | null };


export const MedproResetpasswordDocument = gql`
    query medproResetpassword($username: String, $password: String, $userType: String) {
  resetPassword(username: $username, password: $password, userType: $userType)
}
    `;

/**
 * __useMedproResetpasswordQuery__
 *
 * To run a query within a React component, call `useMedproResetpasswordQuery` and pass it any options that fit your needs.
 * When your component renders, `useMedproResetpasswordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMedproResetpasswordQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      userType: // value for 'userType'
 *   },
 * });
 */
export function useMedproResetpasswordQuery(baseOptions?: Apollo.QueryHookOptions<MedproResetpasswordQuery, MedproResetpasswordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MedproResetpasswordQuery, MedproResetpasswordQueryVariables>(MedproResetpasswordDocument, options);
      }
export function useMedproResetpasswordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedproResetpasswordQuery, MedproResetpasswordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MedproResetpasswordQuery, MedproResetpasswordQueryVariables>(MedproResetpasswordDocument, options);
        }
export type MedproResetpasswordQueryHookResult = ReturnType<typeof useMedproResetpasswordQuery>;
export type MedproResetpasswordLazyQueryHookResult = ReturnType<typeof useMedproResetpasswordLazyQuery>;
export type MedproResetpasswordQueryResult = Apollo.QueryResult<MedproResetpasswordQuery, MedproResetpasswordQueryVariables>;