import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MedproLoginQueryVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
  userType?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type MedproLoginQuery = { __typename?: 'Query', login?: Array<{ __typename?: 'Session', id: string, medProAsSessionOrganizer?: { __typename?: 'MedPro', id: string, userName?: string | null } | null, patient?: { __typename?: 'Patient', id: string, patientUserName?: string | null } | null, medProsAsGuests?: Array<{ __typename?: 'MedPro', id: string, userName?: string | null } | null> | null } | null> | null };


export const MedproLoginDocument = gql`
    query medproLogin($username: String, $password: String, $userType: String) {
  login(username: $username, password: $password, userType: $userType) {
    id
    medProAsSessionOrganizer {
      id
      userName
    }
    patient {
      id
      patientUserName
    }
    medProsAsGuests {
      id
      userName
    }
  }
}
    `;

/**
 * __useMedproLoginQuery__
 *
 * To run a query within a React component, call `useMedproLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useMedproLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMedproLoginQuery({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      userType: // value for 'userType'
 *   },
 * });
 */
export function useMedproLoginQuery(baseOptions?: Apollo.QueryHookOptions<MedproLoginQuery, MedproLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MedproLoginQuery, MedproLoginQueryVariables>(MedproLoginDocument, options);
      }
export function useMedproLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MedproLoginQuery, MedproLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MedproLoginQuery, MedproLoginQueryVariables>(MedproLoginDocument, options);
        }
export type MedproLoginQueryHookResult = ReturnType<typeof useMedproLoginQuery>;
export type MedproLoginLazyQueryHookResult = ReturnType<typeof useMedproLoginLazyQuery>;
export type MedproLoginQueryResult = Apollo.QueryResult<MedproLoginQuery, MedproLoginQueryVariables>;