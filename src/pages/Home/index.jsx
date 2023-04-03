import { Container, Content } from './styles';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
