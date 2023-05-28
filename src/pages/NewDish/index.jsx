import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, LightButton } from './styles';
import CaretLeft from '../../assets/CaretLeft.svg';
import Upload from '../../assets/upload.svg';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NewTag } from '../../components/NewTag';
import { useRef } from 'react';

export function NewDish() {

  const [ dishImageFile, setDishImageFile ] = useState(null);
  const [ imgNameDisplay, setImgNameDisplay ] = useState('Selecione imagem');
  const addNew = useRef(null);

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState('');

  function handleRemoveIngredient(tag) {
    const filteredTags = ingredients.filter(t => t !== tag);
    setIngredients(filteredTags);
  }

  function handleAddIngredient() {
    // console.log('tags:', tags)

    if (!newIngredient) return;
    if (ingredients.includes(newIngredient.trim())) return setNewIngredient('');

    setIngredients(prevState => [ ...prevState, newIngredient.trim() ]);
    setNewIngredient('');
  }

  function handleSubmit() {
    alert('enviei');
  }

  function handleImageKeypress(event) {
    if (event.code === 'Space' || event.code === 'Enter')
      event.target.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[ 0 ];
    setDishImageFile(file);
    setImgNameDisplay(file.name);

    console.log('file', file);

    // const imagePreview = URL.createObjectURL(file);
    // setAvatar(imagePreview);

  }

  return (
    <Container>
      <Header />
      <Content>

        <Link to={'/'} className="back">
          {' '}
          <img src={CaretLeft} alt="" /> Voltar
        </Link>
        <h3>Novo prato</h3>

        <div className='input-row'>
          <div className="input-wrapper image">
            <label htmlFor="dish-image">Imagem do prato</label>
            <label className='input-image'
              tabIndex="0"
              onKeyUp={handleImageKeypress}
              htmlFor="dish-image">
              <img src={Upload} alt="" /> <span>{imgNameDisplay}</span>
            </label>
            <input
              type="file"
              name="picture"
              className="hidden"
              id="dish-image"
              placeholder="Selecione imagem"
              accept="image/png, image/jpeg"
              onChange={handleChangeImage}
            />
          </div>

          <div className="input-wrapper name">
            <label htmlFor="dish-name">Nome</label>
            <Input type="text" placeholder="Ex.: Salada Ceasar" id="dish-name" />
          </div>

          <div className="input-wrapper category">
            <label htmlFor="dish-category">Categoria</label>
            <div className='select-container'>
              <select name="categoria" id="dish-category">
                <option value="">Escolha a categoria</option>
                <option value="1">Sobremesas</option>
                <option value="2">Refeições</option>
                <option value="3">Bebidas</option>
              </select>
              {/* <div className='icon-container'>
                <img src={ChevronDown} alt="" />
              </div> */}
            </div>
            {/* <select type="text" placeholder="Refeição" id="dish-category" /> */}
          </div>
        </div>

        <div className='input-row'>
          <div className="input-wrapper ingredients">
          <label htmlFor="ingredients">Ingredientes</label>
            {/* <Input type="text" placeholder="Pão Naan" id="ingredients" /> */}
            <div className='ingredients-list'>

              {ingredients.length > 0 &&
                ingredients.map((ingredient, idx) => (
                  <NewTag
                    key={`${idx}-${ingredient}`}
                    size={ingredient.length}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    onKeyUp={e => { if (e.key === 'Delete') handleRemoveIngredient(ingredient); }}
                  />
                ))}

              <NewTag
                isNew
                id="ingredients"
                placeholder="Adicionar"
                value={newIngredient}
                onClick={handleAddIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onKeyUp={e => { if (e.key === 'Enter') handleAddIngredient(); }}
              />
            </div>
        </div>

          <div className="input-wrapper price">
          <label htmlFor="price">Preço</label>
          <Input type="number" placeholder="R$ 00,00" id="price" />
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição</label>
          <textarea
            rows="5"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            id="description"
          ></textarea>
        </div>

        <LightButton onClick={handleSubmit}>Salvar alterações</LightButton>

      </Content>
      <Footer />
    </Container>
  );
}
