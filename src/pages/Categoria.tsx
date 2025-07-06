import { useLocation, useParams } from 'react-router-dom';
import Heading from '../components/Heading';
import ListGroup from '../components/ListGroup';
import { getNews } from '../hooks/getNews';
import {
  extractErrorMessage,
  extractSourceName,
} from '../functions/generalFunctions';
import ErrorAlert from '../components/ErrorAlert';
import type { ArticleItem } from '../hooks/interfaces';
import ListCard from '../components/ListCard';
import InfoAlert from '../components/InfoAlert';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

export default function Categoria() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const { data, error } = getNews(id, searchQuery);
  const errorMessage = extractErrorMessage([error]);
  const sourceName = extractSourceName(data);
  const [refresh, setRefresh] = useState(0); // Estado para forçar re-renderização

  const handleRefresh = () => {
    setRefresh((prev) => prev + 1); // Atualiza o estado para forçar re-renderização
  };

  console.log('Categoria', id, 'Search Query:', searchQuery);

  return (
    <>
      <div className="@container flex flex-row px-4">
        <div className="w-full @lg:w-3/4 @3xl:w-2/4 mx-auto my-4">
          <Heading title={sourceName} className="px-2" />
          <ListGroup title="Home" to="/" />
          <ListGroup title="Favoritos" to="/favoritos" />
          <SearchBar />
          <Heading title="Feed" type="sub" className="my-4 px-2" />
          {errorMessage ? (
            <div className="my-4 px-2">
              <ErrorAlert message={errorMessage} />
            </div>
          ) : data && data.articles.length === 0 ? (
            <div className="my-4 px-2">
              <InfoAlert message="Nenhum artigo encontrado!" />
            </div>
          ) : (
            data &&
            data.articles.map((item: ArticleItem) => (
              <ListCard
                key={item.url}
                article={item}
                onAction={handleRefresh}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
