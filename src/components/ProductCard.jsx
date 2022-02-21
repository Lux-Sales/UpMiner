import React from 'react'
import { handleIcon } from '../services/utils'
import '../styles/ProductCard/productCard.css'


const ProductCard = (props) => {
    const {product} = props
    const {id, title, description, value} = product

    const handleRedirect = () =>{
        localStorage.setItem("@productDetail",JSON.stringify(product));
    }

  return (
    <div className='product__card'>
        <div className='product__card__content'>
            <div className='product__card__content--icon-title'>
        {
            handleIcon(title)
        }
        <h3>{title}</h3>
            </div>
        <p>{description}</p>
        </div>
        <footer className='product__card__footer'>
            <span>R$ {value && value.toFixed(2)}</span>
            <a href='/detail' onClick={handleRedirect}>
                Saiba Mais
                </a>
        </footer>
        </div>
  )
}

export default ProductCard