import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import UserContext from '../contexts/UserContext';
import deleteButton from '../assets/deleteButton.svg';

export default function TelaCarrinho() {
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState([]);
    const {userData:{token}} = useContext(UserContext);

    useEffect(() => {
        const URL =  `http://localhost:5001/cart`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promessa = axios.get(URL, config);
        promessa.then(resposta => {
            setCarrinho(resposta.data);
        });
        promessa.catch(err => {
            console.log(err);
        });
    },[]);

    console.log(carrinho);

    return (
        <>
            <Header/>
            <Main>
                {carrinho.length === 0 ? (
                    <div className='title'>no products found</div>
                ):(
                    <>{carrinho.map(produto => { 
                        let price =  produto.product.price * produto.quantity;
                        return (
                            <>
                                <div className='product'>
                                    <img className='image' src={produto.product.image} alt="product"/>
                                    <div className='info'>
                                        <div className='title'>{produto.product.title} - {produto.quantity}</div>
                                        <div className='price'>$ {price.toFixed(2)}</div>
                                    </div>
                                    <img className='delete' src={deleteButton} alt="deleteButton"/>
                                </div>  
                            </>
                        )
                    })}</>
                )}
                
                <button>Buy Now</button>
                <button onClick={()=> navigate('/produtos')}>Back to products</button>
            </Main>
        </>
    )
} 

// styled components
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 80px;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
    height: 100vh;
    background-color: #F1E8FF;
    .product{
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 15px;
    }
    .image{
        height: 100%;
        object-fit: cover;
    }
    .info{
        width: 65%;
        box-sizing: border-box;
        padding: 10px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
    }
    .price{
        font-size: 18px;
        line-height: 21px;
        font-weight: 600;
    }
    .delete{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
    }
    button{
        width: 203px;
        height: 40px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 20px;
    }
`;