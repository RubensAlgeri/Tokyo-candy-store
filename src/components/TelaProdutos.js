import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';

import menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';

export default function TelaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const URL =  'http://localhost:5001/products';
        const promessa = axios.get(URL);
        promessa.then(resposta => {
            console.log(resposta.data);
            setProdutos(resposta.data);
        });
        promessa.catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <Header>    
                    <img src={menu} alt="menu" />
                    <img className='logo' src={logo} alt="logo" />
                    <img src={cart} alt="cart" />
            </Header>
            <Main>
                <h1>Categories</h1>
                <div className="categories">
                    <div className="category">Candy</div>
                    <div className="category">Snacks</div>
                    <div className="category">Cookies</div>
                    <div className="category">Chocolates</div>
                </div>
                <div className="products">
                    {produtos.map(({title, price, image}) => {
                        return (
                            <div className="product">
                                <img src={image} alt="product" />
                                <div className="product-info">
                                    {title}
                                </div>
                                <div className="product-price">
                                    $ {price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Main>
        </>
    )
}

// styledComponents
const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    img {
        width: 30px;
        height: 30px;
    }
    .logo {
        width: 150px;
        height: 30px;
    }
`;
const Main = styled.div`
    box-sizing: border-box;
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    height: 100%;
    background-color: #F1E8FF;
    h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #8005AE;
    }
    .categories {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 15px;
    }
    .category {
        width: 80px;
        height: 30px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        color: #FFFFFF;
        background-color: #CEAFFF;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 35px;
    }
    .product {
        width: 150px;
        height: 215px;
        background-color: #FFFFFF;
        box-shadow: 2px 2px 2px rgba(206, 175, 255, 0.25);
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .product img {
        width: 100%;
        object-fit: contain;
    }
    .product-info {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #8005AE;
        box-sizing: border-box;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 5px;
    }
    .product-price {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        box-sizing: border-box;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 3px;
    }
`;