import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getStorageItem } from '../storage/asyncStorage';

const GRAPHQL_ENDPOINT = "https://rumie-backend-dev.onrender.com/graphql";
import { STORAGE_KEYS } from '../utils/constants';

const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const token = await getStorageItem<string>(STORAGE_KEYS.ACCESS_TOKEN);
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  } catch (err) {
    console.warn('Error loading auth token', err);
    return { headers: { ...headers } };
  }
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;