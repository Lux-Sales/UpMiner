import React, {useState, useEffect} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/ProductDetail/productDetail.css'
import detailImage from '../assets/banner-negocio.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../components/Header'

const ProductDetail = () => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const bannerProductStoraged = JSON.parse(localStorage.getItem("@bannerProduct"))
        const productStoraged = JSON.parse(localStorage.getItem("@productDetail"))
        setProduct(productStoraged?productStoraged:bannerProductStoraged)
    },[])

  return (
      <>
      <Header />
  <div className='productDetail__container' >
  <div className='productDetail__title'>
      <a href='/' onClick={()=> {
          localStorage.removeItem("@productDetail")
          localStorage.removeItem("@bannerProduct")
          }}>
          <ArrowBackIosIcon />
      </a>
      <h2>{product.title}</h2>
  </div>
  <div className='productDetail__banner'>
      <button>
      <ArrowBackIcon />
      </button>
      <img src={detailImage} />
      <button>
      <ArrowForwardIcon />
      </button>
  </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic itaque harum cumque. Nulla quia accusamus eos optio magnam odio ducimus quidem consectetur aperiam quod, non dicta delectus quae minus iure!
      Nobis molestiae maxime incidunt voluptate corporis, autem aperiam consectetur laudantium porro eligendi voluptatem optio exercitationem, minus inventore dignissimos quidem error? Culpa exercitationem ex rerum nostrum officiis aliquid at odio hic?
      Error sint, voluptatem consequuntur ratione quae, accusamus quibusdam, culpa magnam perspiciatis fuga dolorem earum voluptate ipsum recusandae neque quod suscipit reprehenderit cum a cupiditate amet expedita ullam ex ut. Aliquid?</p>
      <div className='productDetail__value-button-block'>
            <span><span>R$</span>{product.value && product.value.toFixed(2)}</span>
            <button>Habilitar</button>
        </div>
  </div>
  </>
  )
}

export default ProductDetail