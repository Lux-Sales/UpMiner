import React, { useState } from 'react';
import { handleIcon } from '../services/utils';
import '../styles/CategoryMenu/category.css';

const  CategoryMenu = (props) => {
  const [selected, setSelected] = useState(1);
  const {setFilter} = props
  return (
    <ul className="category__menu">
      <button
        className="category__item"
        onClick={() => {setFilter(''), setSelected(1)}}
        style={selected == 1 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
          {handleIcon('Todos')}
        <span>Todos</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Profissional'), setSelected(2)}}
        style={selected == 2 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Profissional')}
        <span>Profissional</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Reguladores'), setSelected(3)}}
        style={selected == 3 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Reguladores')}
        <span>Reguladores</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Sócio Ambiental'), setSelected(4)}}
        style={selected == 4 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Sócio Ambiental')}
        <span>Sócio Ambiental</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Jurídico'), setSelected(5)}}
        style={selected == 5 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Jurídico')}
        <span>Jurídico</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Listas Restritivas'), setSelected(6)}}
        style={selected == 6 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Listas Restritivas')}
        <span>Listas Restritivas</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Mídia / Internet'), setSelected(7)}}
        style={selected == 7 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Mídia / Internet')}
        <span>Mídia / Internet</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Bens e Imóveis'), setSelected(8)}}
        style={selected == 8 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Bens e Imóveis')}
        <span>Bens e Imóveis</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Cadastro'), setSelected(9)}}
        style={selected == 9 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Cadastro')}
        <span>Cadastro</span>
      </button>
      <button
        className="category__item"
        onClick={() => {setFilter('Financeiro'), setSelected(10)}}
        style={selected == 10 ? {backgroundColor: '#eb7223', color:"#fff"}:{}}
      >
        {handleIcon('Financeiro')}
        <span>Financeiro</span>
      </button>
    </ul>
  );
}

export default CategoryMenu;
