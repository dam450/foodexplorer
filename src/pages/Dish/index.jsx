import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CaretLeft from '../../assets/CaretLeft.svg';
import PreviewPlaceholder from '../../assets/empty_plate.png';

import { Container, Content } from './styles';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { QuantityPicker } from '../../components/QuantityPicker';

import { api } from '../../services/api';

export function Dish() {
  const [ quantity, setQuantity ] = useState(5);
  const [ dish, setDish ] = useState();
  const [ dishPreview, setDishPreview ] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit() {
    alert(quantity);
  }

  async function fetchDish(id) {
    const dishId = Number(id);
    try {
      const { data } = await api.get(`/dishes/${dishId}`);
      if (data.id) {
        setDish(data);
        setDishPreview(dish?.picture ?? PreviewPlaceholder);
      }
    } catch (error) {
      console.error(error);
      navigate('/', redirect);
    }
  }

  useEffect(() => {
    fetchDish(id);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Link to={'/'}>
          <img src={CaretLeft} alt="voltar" /> Voltar
        </Link>
        <div className="dish-wrapper">
          <div className="dish-preview">
            <img src={dishPreview} alt="foto do prato" />
          </div>
          <div className="info">
            <h3>{dish?.name}</h3>
            <p>{dish?.description}</p>
            <div className="tags">
              {dish?.ingredients ? dish.ingredients.map((item, id) => <Tag key={id} title={item} />) : null}
            </div>
            <div className="order">
              <QuantityPicker value={quantity} setValue={setQuantity} />
              <Button onClick={handleSubmit}>incluir ∙ R$ {String(dish?.price).replace('.', ',')}</Button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
