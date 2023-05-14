import { useCallback, useState } from 'react';
import axios from 'axios';

export type FetchOptions = {
  url: string;
  params?: Record<string, string | number | boolean>;
};

export const useFetch = <T extends Object>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<unknown | undefined>(undefined);

  const fetchData = useCallback(
    async ({ url, params }: FetchOptions): Promise<T> => {
      let data;
      setLoading(true);

      try {
        const response = await axios.request({ method: 'get', url, params });
        data = response.data;
      } catch (error: unknown) {
        console.error(error);
        setErrors(JSON.stringify(error));
      } finally {
        setLoading(false);
      }

      return data;
    },
    []
  );

  const refetch = ({ url, params }: FetchOptions) => {
    setLoading(true);
    fetchData({ url, params });
  };

  return { loading, errors, refetch, fetchData };
};
