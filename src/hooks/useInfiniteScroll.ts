import { useState, useCallback } from 'react';

type FetchFunction<T> = (page: number, limit: number) => Promise<T[]>;

export const useInfiniteScroll = <T>(fetchFunction: FetchFunction<T>, limit: number = 10) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchFunction(page, limit);
      if (newData.length > 0) {
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, fetchFunction, limit]);

  return { data, loading, hasMore, loadMore };
};
