import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import { LoginRequest, LoginResponse } from '../../graphql/generated/types';
const LOGIN_MUTATION = gql`
  mutation Login($data: LoginRequest!) {
    login(data: $data) {
      accessToken
      refreshToken
      loggedIn
      msg
    }
  }
`;
type LoginMutationData = {
  login: LoginResponse;
};
type LoginMutationVars = {
  data: LoginRequest;
};
export const useLoginMutation = () => {
  const [mutate, state] = useMutation<LoginMutationData, LoginMutationVars>(LOGIN_MUTATION);
  return { mutate, ...state };
};