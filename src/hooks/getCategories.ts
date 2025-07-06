import { useEffect, useState } from 'react';
import axios from 'axios';
import type { DataType, ErrorType } from './interfaces';

export function getCategories(category: String) {
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<ErrorType | undefined>();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_NEWS_APP_URL}/v2/top-headlines/sources`,
          {
            params: {
              apiKey: import.meta.env.VITE_NEWS_APP_KEY,
              category: category,
            },
          }
        );
        setData(response.data);
      } catch (err: any) {
        setError(err);
      }
    })();
  }, []);

  return { data, error };
}
