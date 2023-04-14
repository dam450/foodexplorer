import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import CaretLeft from '../../assets/CaretLeft.svg';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function NewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to={'/'} className="back">
          {' '}
          <img src={CaretLeft} alt="" /> Voltar
        </Link>
        <h3>Novo prato</h3>

        <div className="input-wrapper">
          <label htmlFor="dish-image">Imagem do prato</label>
          <Input type="file" name="" id="dish-image" placeholder="Selecione imagem" accept="image/png, image/jpeg" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="dish-name">Nome</label>
          <Input type="text" placeholder="Ex.: Salada Ceasar" id="dish-name" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="dish-category">Categoria</label>
          <Input type="text" placeholder="Refeição" id="dish-category" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="ingredients">Ingredientes</label>
          <Input type="text" placeholder="Pão Naan" id="ingredients" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="price">Preço</label>
          <Input type="text" placeholder="R$ 00,00" id="price" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição</label>
          <textarea
            rows="5"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            id="description"
          ></textarea>
        </div>

        <Button>Salvar alterações</Button>
      </Content>
      <Footer />
    </Container>
  );
}
