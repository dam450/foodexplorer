import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'


import { Container, SearchBox } from './styles';

import openMenuImg from '../../assets/menu-open.svg';
import closeMenuImg from '../../assets/menu-close.svg';
import receiptImg from '../../assets/receipt.svg';
import logoImg from '../../assets/logo.svg';
import exitImg from '../../assets/exit.svg';


import { Input } from '../Input';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  function handleMenu() {
    if (menuOpen) {
      document.getElementById('menu-img').src = openMenuImg;
      setMenuOpen(false);
    } else {
      document.getElementById('menu-img').src = closeMenuImg;
      setMenuOpen(true);
    }
  }

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  function toggleNavbar(e) {
    console.log('toggleNavbar', e.target);
    navRef.current.classList.toggle('mobile-menu');
  }

  return (
    <Container>
      <button className="menu" onClick={toggleNavbar} aria-label="Abrir Menu">
        <img id="menu-img" src={openMenuImg} alt="abrir menu" />
      </button>

      <div className="logo-wrapper">
        <div className="logo">
          <img src={logoImg} alt="logo food explorer" />
          <h1>food explorer</h1>
        </div>
        {user.admin ? <span>Admin</span> : null}
      </div>

      <div className="bar">
        <nav ref={navRef}>
          <button className="menu" onClick={toggleNavbar} aria-label="Fechar Menu">
            <img src={closeMenuImg} alt="fechar menu" />
            Menu
          </button>

          <Input
            placeholder="Busque por pratos ou ingredientes"
            Icon={FiSearch}
          />

          {user.admin ? (
            <button
              className="mobile-button"
              onClick={() => {
                navigate('/new');
              }}
            >
              <span>Novo prato</span>
            </button>
          ) : null}

          <button className="mobile-button" onClick={handleSignOut}>
            <span>Sair</span>
          </button>
        </nav>

        {user.admin ? (
          <Button
            className='desktop-only'
            onClick={() => {
              navigate('/new');
            }}
          >
            Novo prato
          </Button>
        ) : (
          <button aria-label="pedido">
            <img src={receiptImg} alt="" />
          </button>
        )}

        <button id="exit" onClick={handleSignOut}>
          <img src={exitImg} alt="Sair da aplicação" />
        </button>
      </div>
    </Container>
  );
}
