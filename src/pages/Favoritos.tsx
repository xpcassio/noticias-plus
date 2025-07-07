import Heading from '../components/Heading';
import ListGroup from '../components/ListGroup';
import { getSavedArticles } from '../functions/localStorageFunctions';
import ListCard from '../components/ListCard';
import type { ArticleItem } from '../hooks/interfaces';
import { useEffect, useState } from 'react';
import InfoAlert from '../components/InfoAlert';

export default function Favoritos() {
  const [savedArticles, setSavedArticles] = useState<ArticleItem[]>([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const articles = getSavedArticles();
    setSavedArticles(articles);
  }, [refresh]);

  // Atualiza o estado para forçar re-renderização
  const handleRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  return (
    <>
      <div className="@container flex flex-row px-4">
        <div className="w-full @lg:w-3/4 @3xl:w-2/4 mx-auto my-4">
          <Heading title="Favoritos" className="px-2" />
          <ListGroup title="Home" to="/" />
          <Heading title="Feed" type="sub" className="my-4 px-2" />
          {savedArticles.length > 0 ? (
            savedArticles.map((item: ArticleItem) => (
              <ListCard
                key={item.url}
                article={item}
                onAction={handleRefresh}
              />
            ))
          ) : (
            <InfoAlert message="Nenhum artigo salvo!" />
          )}
        </div>
      </div>
    </>
  );
}
