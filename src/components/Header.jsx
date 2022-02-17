import React from 'react';
import '../styles/Header/header.css';
import Background from '../assets/banner-negocio.jpg'
import upLexisLogo from '../assets/up-lexis-logo.png'
const Header = () => {
  return (
    <div className="header" style={{backgroundImage: `url(${Background})`}}>
      <div className='header__content-block'>
        <div className="header__title">
          <img src={upLexisLogo} alt="" />
          <h2>Histórico Empresarial</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate possimus modi illum dolores consequatur. Voluptas esse, nam, voluptatum dicta nisi, cupiditate iste vitae accusamus nihil cumque corrupti enim nobis?</p>
        <div className='header__value-button-block'>
            <span><span>R$</span>40,00</span>
            <button>Saiba Mais</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
