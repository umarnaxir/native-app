import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { LoggedInUser } from '../../graphql/generated/types';

const FETCH_LOGGED_IN_USER = gql`
  query FetchLoggedInUser {
    fetchLoggedInUser {
      id
      firstName
      lastName
      displayPicture
      eduInstituteId
    }
  }
`;

type Data = {
  fetchLoggedInUser: LoggedInUser;
};

export const useFetchLoggedInUser = () => {
  const { data, loading, error, refetch } = useQuery<Data>(FETCH_LOGGED_IN_USER, {
    fetchPolicy: 'network-only',
  });

  return {
    user: data?.fetchLoggedInUser ?? null,
    loading,
    error,
    refetch,
  };
};
