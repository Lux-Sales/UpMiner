import React from 'react';
import '../styles/Header/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className='header__content-block'>
        <div className="header__title">
          <img src="" alt="" />
          <h2>Histórico Empresarial</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate possimus modi illum dolores consequatur. Voluptas esse, nam, voluptatum dicta nisi, cupiditate iste vitae accusamus nihil cumque corrupti enim nobis?</p>
        <div className='header__value-button-block'>
            <span>R$40,00</span>
            <button>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
