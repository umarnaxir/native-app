import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import { MarketplaceListingType } from '../../graphql/generated/types';

const FETCH_HOMEPAGE_MARKETPLACE_LISTING_V2 = gql`
  query FetchHomepageMarketplaceListingV2($eduInstituteId: String!) {
    fetchHomepageMarketplaceListingV2(eduInstituteId: $eduInstituteId) {
      id
      title
      price
      media {
        name
        thumb
        type
      }
    }
  }
`;

type Data = {
  fetchHomepageMarketplaceListingV2: Array<MarketplaceListingType>;
};

type Vars = {
  eduInstituteId: string;
};

export const useFetchHomepageMarketplaceListingV2 = (eduInstituteId?: string | null) => {
  const { data, loading, error, refetch } = useQuery<Data, Vars>(FETCH_HOMEPAGE_MARKETPLACE_LISTING_V2, {
    variables: { eduInstituteId: eduInstituteId ?? '' },
    skip: !eduInstituteId,
    fetchPolicy: 'network-only',
  });

  return {
    listings: data?.fetchHomepageMarketplaceListingV2 ?? [],
    loading,
    error,
    refetch,
  };
};
