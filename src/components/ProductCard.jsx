import React from 'react'
import { handleIcon } from '../services/utils'
import '../styles/ProductCard/productCard.css'


const ProductCard = (props) => {
    const {id, title, description, value, category} = props.product
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
            <span>R$ {value}</span>
            <a href="">Saiba Mais</a>
        </footer>
        </div>
  )
}

export default ProductCard