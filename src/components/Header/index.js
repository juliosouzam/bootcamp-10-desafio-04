import React from 'react';

import './style.css';
import logo from '../../assets/facebook.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="facebook" />
      <span>Meu perfil</span>
    </header>
  );
}
