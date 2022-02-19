import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu';
import {getCards} from '../services/api'
import ProductCard from '../components/ProductCard';
import '../styles/Dashboard/dashboard.css'
import { orderProducts } from '../services/utils';

const Dashboard = () => {
    const [productCards, setProductCards] = useState([])
    const [order, setOrder] = useState('value')
    const [filter, setFilter] = useState('')

    useEffect(()=>{
        const fetchCards = async () =>{
            const cards = await getCards()
            orderProducts(cards, order)
            setProductCards(cards.reverse())
        }
        fetchCards()
    },[])

  return (
    <>
    <Header />
    <CategoryMenu setFilter={setFilter} />
        <label htmlFor="order_by" className='filter__label'>
            ORDENAR
            <select name="order_by" onChange={e => {
                setOrder(e.target.value)
                orderProducts(productCards, order)
            }}>
                <option value="value" defaultValue={true}>Preço</option>
                <option value="createdAt">Lançamento</option>
            </select>
        </label>
    <div className='product__cards__grid'>
    {productCards.map(productCard =>{
         return(filter == ''?(
            <ProductCard
            key={productCard.id}
            product={productCard}
            />
            ):productCard.title == filter?
            (<ProductCard
            key={productCard.id}
            product={productCard}
            />):'')
    }).reverse()}
    </div>
    </>
  );
};

export default Dashboard;
