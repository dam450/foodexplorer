import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Container, Content, DarkButton, TomatoButton } from './styles';

import CaretLeft from '../../assets/CaretLeft.svg';
import Upload from '../../assets/upload.svg';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NewTag } from '../../components/NewTag';

import { api } from '../../services/api';
import { Button } from '../../components/Button';

export function EditDish() {

  const { id } = useParams();

  const navigate = useNavigate();

  // const [ dish, setDish ] = useState({});
  const [ categories, setCategories ] = useState([]);
  const [ dishImageFile, setDishImageFile ] = useState(null);
  const [ imgNameDisplay, setImgNameDisplay ] = useState('Selecione imagem');

  // const addNew = useRef(null);

  const [ ingredients, setIngredients ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState('');
  const [ name, setName ] = useState('');
  const [ dishCategory, setDishCategory ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ description, setDescription ] = useState('');

  function handleRemoveIngredient(tag) {
    const filteredTags = ingredients.filter(t => t !== tag);
    setIngredients(filteredTags);
  }

  function handleAddIngredient() {
    if (!newIngredient) return;
    if (ingredients.includes(newIngredient.trim())) return setNewIngredient('');

    setIngredients(prevState => [ ...prevState, newIngredient.trim() ]);
    setNewIngredient('');
  }

  async function handleDelete(id) {

    alert(`Deleted ${id} `);
    const { status } = await api.delete(`/dishes/${id}`);

    console.log('delete: ', status);

    // TODO: redirecionar home
  }

  async function handleSubmit() {

    // TODO: redirecionar home

    console.log('category_id:');
    console.log(dishCategory);
    switch (true) {
      case name === '':
        return alert('informe o nome do prato.');
      case dishCategory == 0:
        return alert('informe a categoria.');
      case price == 0:
        return alert('informe o preço');
    }

    const dishUpdate = {};
    dishUpdate.name = name;
    dishUpdate.category_id = dishCategory;
    dishUpdate.description = description;
    dishUpdate.price = price;
    dishUpdate.ingredients = ingredients;

    const { data: savedDish } = await api.put(`/dishes/${id}`, dishUpdate);

    console.log('savedDish: ', savedDish);

    // const { id } = savedDish;

    if (dishImageFile && id) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('picture', dishImageFile);

      const response = await api.patch(`/dishes/${id}/picture`, fileUploadForm);
    }
    alert('prato salvo!');
  }

  function handleImageKeypress(event) {
    if (event.code === 'Space' || event.code === 'Enter')
      event.target.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[ 0 ];
    setDishImageFile(file);
    setImgNameDisplay(file.name);
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get(`/categories`);
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchDish(id) {
    try {
      const { data: dishInfo } = await api.get(`/dishes/${id}`);

      setName(dishInfo.name);
      setDescription(dishInfo.description);
      setDishCategory(dishInfo.category_id);
      setIngredients(dishInfo.ingredients);
      setPrice(dishInfo.price);

    } catch (error) {
      console.error(error);
      navigate('/', redirect);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchDish(id);
  }, []);

  return (
    <Container>
      <Header />
      <Content>

        <Link to={'/'} className="back">
          <img src={CaretLeft} alt="" /> Voltar
        </Link>

        <h3>Editar prato</h3>

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
            <Input type="text" placeholder="Ex.: Salada Ceasar" id="dish-name" altcolor
              value={name}
              onChange={e => setName(e.target.value)} />
          </div>

          <div className="input-wrapper category">
            <label htmlFor="dish-category">Categoria</label>
            <div className='select-container'>
              <select name="categoria" id="dish-category"
                value={dishCategory}
                onChange={e => setDishCategory(e.target.value)}
              >
                {categories && categories.map(c => (
                  <option value={c.id} key={`${c.id}-${c.name}`}>{c.name}</option>
                ))}
              </select>

            </div>

          </div>
        </div>

        <div className='input-row'>
          <div className="input-wrapper ingredients">
            <label htmlFor="ingredients">Ingredientes</label>

            <div className='ingredients-list'>

              {ingredients?.length > 0 &&
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
            <Input type="number" placeholder="R$ 00,00" id="price" altcolor
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="description">Descrição</label>
          <textarea
            rows="5"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="buttons">
          <DarkButton onClick={() => handleDelete(id)} className="button delete" >Excluir prato</DarkButton>
          <TomatoButton onClick={handleSubmit} className="button save" >Salvar alterações</TomatoButton>
        </div>

      </Content>
      <Footer />
    </Container>
  );
}