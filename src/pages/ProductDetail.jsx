import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../styles/ProductDetail/productDetail.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../components/Header';

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent(
            current == product.detailImages.length - 1 ? 0 : current + 1,
        );
    };

    const previousImage = () => {
        setCurrent(
            current == 0 ? product.detailImages.length - 1 : current - 1,
        );
    };

    useEffect(() => {
        const productStoraged = JSON.parse(
            localStorage.getItem('@productDetail'),
        );
        setProduct(productStoraged);
    }, []);

    return (
        <>
            <Header />
            <div className="productDetail__container">
                <div className="productDetail__title">
                    <a
                        href="/"
                        onClick={() => {
                            localStorage.removeItem('@productDetail');
                        }}
                    >
                        <ArrowBackIosIcon />
                    </a>
                    <h2>{product.title}</h2>
                </div>
                <div className="productDetail__banner">
                    <button onClick={previousImage}>
                        <ArrowBackIcon />
                    </button>
                    {product.detailImages &&
                        product.detailImages.map((image, index) => {
                            return (
                                <img
                                    className={
                                        index === current
                                            ? 'image__activated'
                                            : 'image__deactivated'
                                    }
                                    src={image}
                                />
                            );
                        })}
                    <button onClick={nextImage}>
                        <ArrowForwardIcon />
                    </button>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Hic itaque harum cumque. Nulla quia accusamus eos optio
                    magnam odio ducimus quidem consectetur aperiam quod, non
                    dicta delectus quae minus iure! Nobis molestiae maxime
                    incidunt voluptate corporis, autem aperiam consectetur
                    laudantium porro eligendi voluptatem optio exercitationem,
                    minus inventore dignissimos quidem error? Culpa
                    exercitationem ex rerum nostrum officiis aliquid at odio
                    hic? Error sint, voluptatem consequuntur ratione quae,
                    accusamus quibusdam, culpa magnam perspiciatis fuga dolorem
                    earum voluptate ipsum recusandae neque quod suscipit
                    reprehenderit cum a cupiditate amet expedita ullam ex ut.
                    Aliquid?
                </p>
                <div className="productDetail__value-button-block">
                    <span>
                        <span>R$</span>
                        {product.value && product.value.toFixed(2)}
                    </span>
                    <button>Habilitar</button>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
