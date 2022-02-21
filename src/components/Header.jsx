import React, {useEffect, useState} from 'react';
import '../styles/Header/header.css';
import upLexisLogo from '../assets/up-lexis-logo.png'
import { getBannerCards } from '../services/api';

const Header = () => {
    const [bannerCards, setBannerCards] = useState([])
    const [current, setCurrent] = useState(1)

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
    
    const changeBanner = async () =>{
      await sleep(3000)
      if (current === bannerCards.length-1){
        setCurrent(0)
        }
        else{
          setCurrent(current + 1)
        }
      }
      
      
      useEffect(()=>{
        const fetchCards = async () => {
          const cards = await getBannerCards()
          setBannerCards(cards)
        }
        fetchCards()
      },[])

      useEffect(()=>{
        changeBanner()
      },[current])
      
  return (
      <>
    {bannerCards.map((bannerCard, index) => {
      return (
        <div
        key={bannerCard.id} 
        className={index === current ?"header__activated":"header__deactivated"} style={{
            backgroundImage: `url(${bannerCard.bannerImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
            }}>
      <div className='header__content-block'>
        <div className="header__title">
          <img src={upLexisLogo} alt="" />
          <h2>{bannerCard.title}</h2>
        </div>
        <p>{bannerCard.description}</p>
        <div className='header__value-button-block'>
            <span><span>R$</span>{bannerCard.value}</span>
            <a href='/detail' onClick={()=>
                localStorage.setItem('@bannerProduct',JSON.stringify(bannerCard))
            }>Saiba Mais</a>
        </div>
      </div>
    </div>
        )    
    })}
    </>
  );
};

export default Header;
