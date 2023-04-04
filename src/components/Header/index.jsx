import { useRef, useState } from 'react';
import { Container } from './styles';

import openMenuImg from '../../assets/menu-open.svg';
import closeMenuImg from '../../assets/menu-close.svg';
import receiptImg from '../../assets/receipt.svg';
import logoImg from '../../assets/logo.svg';
import exitImg from '../../assets/exit.svg';

import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const { signOut } = useAuth();

  function handleMenu() {
    if (menuOpen) {
      document.getElementById('menu-img').src = openMenuImg;
      setMenuOpen(false);
    } else {
      document.getElementById('menu-img').src = closeMenuImg;
      setMenuOpen(true);
    }
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
        <span>Admin</span>
      </div>

      <div className="bar">
        <nav ref={navRef}>
          <button
            className="menu"
            onClick={toggleNavbar}
            aria-label="Fechar Menu"
          >
            <img src={closeMenuImg} alt="fechar menu" />
            Menu
          </button>

          <Input placeholder="Busque por pratos ou ingredientes" />

          <button onClick={signOut}>
            <span>Sair</span>
          </button>
        </nav>

        <button aria-label="pedido">
          <img src={receiptImg} alt="" />
        </button>

        <button id="exit" onClick={signOut}>
          <img src={exitImg} alt="" />
        </button>
      </div>
    </Container>
  );
}
