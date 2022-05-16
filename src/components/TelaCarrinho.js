import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import Header from './Header';
import deleteButton from '../assets/deleteButton.svg';


import UserContext from '../contexts/UserContext';
dotenv.config()

export default function TelaCarrinho() {

    const [listaCarrinho, setListaCarrinho] = useState([])
    const [total, setTotal] = useState([])
    const {userData:{token}} = useContext(UserContext);
    const navigate = useNavigate();

    console.log("carrinho ",listaCarrinho)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(`http://localhost:5001/cart/${token}`, config)
        promise.then((resposta) => {
            setListaCarrinho(resposta.data);
            setTotal(resposta.data.balance);
        })
        promise.catch((err) => { alert(`deu ruim, ${err.message}`) })
    }, []);

    function removerProduto(idProduto) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        if (window.confirm("Você quer mesmo deletar este Produto?") === true) {
            const promessa = axios.delete(`http://localhost:5001/cart/${idProduto}`, config)
            promessa.then(() => {
                const promise = axios.get(`http://localhost:5001/cart`, config)
                promise.then((resposta) => {
                    console.log("cart ", resposta.data.cart)
                    setListaCarrinho(resposta.data);
                    setTotal(resposta.data.total);
                })
                promise.catch((err) => { alert(`deu ruim, ${err.message}`) })
            })
        }
    }
    function checkout(){
        navigate('/checkout',{state:{listaCarrinho}})
    }

    return (
        <Main>
            <Header/>
            {listaCarrinho.length>0?(listaCarrinho.map(produto => {
                   let productPrice = produto.product.price * produto.quantity;
                return (
                    <Produtos key={produto.product.title}>
                        <img src={produto.product.image} alt="imagem produto" />
                        <p>{produto.product.title} - {produto.quantity}</p>
                        <span>{productPrice.toFixed(2)}</span>
                        <ion-icon onClick={()=>removerProduto(produto.product._id)} name="close-circle"></ion-icon>
                    </Produtos>
                )
            })):<p>Não há nenhum produto em seu carrinho!!</p>}
            <div className='button'>
                <button onClick={checkout}>R${total} Checkout</button>
                <button onClick={()=> navigate('/produtos')}>Back to products</button>
            </div>
        </Main>
    )
}

const Main = styled.div`
    box-sizing: border-box;
    padding-top: 80px;
    .button {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        width: 200px;
        height: 40px;
        margin-bottom: 15px;

    }
`
const Produtos = styled.div`
background-color:#ffffff;
position: relative;
display: flex;
flex-wrap: wrap;
margin: 0 auto 15px;
width:300px;
height: 100px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
img{
    border-radius: 5px;
    margin-right: 10px;
    height: 100px;
    width: auto;
}
p{
    margin-top: 8px;
    width: 139px;
    height: auto;
}
span{
    position: absolute;
    bottom: 14px;
    left: 112px;

    font-weight: 600;
}
ion-icon{
    position: absolute;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    right: 5px;
}
`
