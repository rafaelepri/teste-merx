import HomeTable from 'components/HomeTable';
import Title from 'components/Title';

import { mock } from 'mocks';
import { Container, TitleWrapper } from './styles';

function Home() {
  /*
    Disclaimer: Este comentário existe apenas para exemplificar a chamada de api
    caso a mesma não estivesse apresentando erro de CORS.

    const { getData } = useOrder();

    useEffect(() => {
      getData();
    }, []);
  */

  return (
    <>
      <Container>
        <TitleWrapper>
          <Title title="Orders" />
        </TitleWrapper>

        <HomeTable headers={mock.headers} body={mock.body} />
      </Container>
    </>
  );
}

export default Home;
