import { Banner, Container, Content, SliderWrapper } from './styles';

// import 'keen-slider/keen-slider.min.css';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Slider } from '../../components/Slider';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {

  const [ dishes, setDishes ] = useState();

  const dishTest = {
    "id": 9,
    "name": "001 Salada Ravanello",
    "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
    "price": 19.05,
    "picture": "a797fad5088049555df9-salada.png",
    "category": "Bebidas"
  };

  async function fetchDishes(id) {
    try {
      const { data } = await api.get(`/dishes`);
      setDishes(data);
      console.log(data);
      console.log(dishes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);

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

        <Slider title="Pratos">
          {dishes && dishes.map((dish, id) => (
            <Card dish={dish} key={id} url={`/dish/${dish.id}`} />
          ))}
        </Slider>

        <Slider title="Sobremesas">
          {dishes && dishes.map((dish, id) => (
            <Card dish={dish} key={id} url={`/dish/${dish.id}`} />
          ))}
        </Slider>

        <Slider title="Teste">
          <Card dish={dishTest} key={dishTest.id} url={`/dish/${dishTest.id}`} />
          {/* <Card dish={dish1} key={dish1.id} url={`/dish/${dish1.id}`} /> */}
        </Slider>

      </Content>
      <Footer />
    </Container>
  );
}
