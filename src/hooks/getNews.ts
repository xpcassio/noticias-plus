import { useEffect, useState } from 'react';
import type { ErrorType, NewsItem } from './interfaces';
import axios from 'axios';

export function getNews(sources: String | undefined, search?: string | null) {
  const [data, setData] = useState<NewsItem>();
  const [error, setError] = useState<ErrorType | undefined>();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_NEWS_APP_URL}/v2/top-headlines`,
          {
            params: {
              apiKey: import.meta.env.VITE_NEWS_APP_KEY,
              sources: sources,
              q: search,
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
