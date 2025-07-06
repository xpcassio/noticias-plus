import Heading from '../components/Heading';
import ListGroup from '../components/ListGroup';
import ErrorAlert from '../components/ErrorAlert';
import { getCategories } from '../hooks/getCategories';
import { extractErrorMessage } from '../functions/generalFunctions';

export default function Home() {
  const { data: dataBiz, error: errorBiz } = getCategories('business');
  const { data: dataEnt, error: errorEnt } = getCategories('entertainment');
  const { data: dataHealth, error: errorHealth } = getCategories('health');
  const { data: dataScience, error: errorScience } = getCategories('science');
  const { data: dataSports, error: errorSports } = getCategories('sports');
  const { data: dataTech, error: errorTech } = getCategories('technology');

  const errorMessage = extractErrorMessage([
    errorBiz,
    errorEnt,
    errorHealth,
    errorScience,
    errorSports,
    errorTech,
  ]);

  return (
    <>
      <div className="@container flex flex-row px-4">
        <div className="w-full @lg:w-3/4 @3xl:w-2/4 mx-auto my-4">
          <Heading title="Noticias+" className="px-2" />
          <ListGroup title="Favoritos" to="/favoritos" />
          <Heading title="Feeds" type="sub" className="my-4 px-2" />
          {errorMessage ? (
            <div className="my-4 px-2">
              <ErrorAlert message={errorMessage} />
            </div>
          ) : (
            <>
              <ListGroup title="Technology" source={dataTech} />
              <ListGroup title="Business" source={dataBiz} />
              <ListGroup title="Entertainment" source={dataEnt} />
              <ListGroup title="Health" source={dataHealth} />
              <ListGroup title="Science" source={dataScience} />
              <ListGroup title="Sports" source={dataSports} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
