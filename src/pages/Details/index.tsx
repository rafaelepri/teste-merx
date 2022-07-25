import DetailsTable from 'components/DetailsTable';
import Title from 'components/Title';
import { TitleWrapper } from 'pages/Home/styles';
import { useLocation } from 'react-router-dom';
import { ContentProps } from 'utils/types';
import { Container } from './styles';

interface LocationProps {
  state: ContentProps[];
}

function Details() {
  const location = useLocation() as LocationProps;

  return (
    <Container>
      <TitleWrapper>
        <Title title="Order Details" />
      </TitleWrapper>

      <DetailsTable body={location.state} />
    </Container>
  );
}

export default Details;
