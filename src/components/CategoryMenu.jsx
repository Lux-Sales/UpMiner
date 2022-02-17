import React, { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ParkIcon from '@mui/icons-material/Park';
import GavelIcon from '@mui/icons-material/Gavel';
import BlockIcon from '@mui/icons-material/Block';
import PublicIcon from '@mui/icons-material/Public';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SavingsIcon from '@mui/icons-material/Savings';
import '../styles/CategoryMenu/category.css';

function CategoryMenu() {
  const [selected, setSelected] = useState(0);
  return (
    <ul className="category__menu">
      <button
        className="category__item"
        onClick={() => setSelected(1)}
        style={selected == 1 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <LanguageIcon />
        <span>Todos</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(2)}
        style={selected == 2 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <BusinessCenterIcon />
        <span>Profissional</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(3)}
        style={selected == 3 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <AccountBalanceIcon />
        <span>Reguladores</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(4)}
        style={selected == 4 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <ParkIcon />
        <span>Sócio Ambiental</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(5)}
        style={selected == 5 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <GavelIcon />
        <span>Jurídico</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(6)}
        style={selected == 6 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <BlockIcon />
        <span>Listas Restritivas</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(7)}
        style={selected == 7 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <PublicIcon />
        <span>Midia / Internet</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(8)}
        style={selected == 8 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <DiamondIcon />
        <span>Bens e Imóveis</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(9)}
        style={selected == 9 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <EmojiPeopleIcon
         />
        <span>Cadastro</span>
      </button>
      <button
        className="category__item"
        onClick={() => setSelected(10)}
        style={selected == 10 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        <SavingsIcon />
        <span>Financeiro</span>
      </button>
    </ul>
  );
}

export default CategoryMenu;
