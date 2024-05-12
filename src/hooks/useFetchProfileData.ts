import { useState, useEffect } from 'react';
import { ProfileDataType } from '../types';

// type useFetchUsersProps = {url: string ; jsonData?: never} | {url?: never ; jsonData: ObjectConstructor}

export const useFetchUsers = (url: string) => {
  const [data, setData] = useState<ProfileDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // TODO: Change this to  
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const result = await response.json() as ProfileDataType[];
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
