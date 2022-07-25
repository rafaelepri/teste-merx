import { MainTitle } from './styles';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <MainTitle>{title}</MainTitle>;
}

export default Title;
