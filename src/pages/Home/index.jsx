import { Banner, Container, Content } from './styles';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Banner>
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="banner-img"></div>
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </Banner>
      </Content>
      <Footer />
    </Container>
  );
}
