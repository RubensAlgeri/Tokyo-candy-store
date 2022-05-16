import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import dotenv from "dotenv";
import Header from "./Header"
import { cpfMask } from "./MascaraCPF"

import UserContext from '../contexts/UserContext';
dotenv.config()

export default function TelaCheckout() {

    const [CPF, setCPF] = useState([])
    const { userData, setUserData } = useContext(UserContext)
    const { token } = userData;
    const { listaCarrinho } = useLocation().state;
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(`https://projeto14-tokyo-candy-store.herokuapp.com/checkout`, {}, config)
        promise.then((resposta) => {
            alert("Obrigado pela compra, volte sempre!!!")
        })
        promise.catch((err) => { alert(`deu ruim, ${err.message}`) })
    }, []);

    function enviar(e) {
        e.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promessa = axios.post(
            "https://projeto14-tokyo-candy-store.herokuapp.com/checkout",
            { CPF, listaCarrinho }, config
        );
        promessa.then(() => {
            alert("Sua compra foi concluída")
            navigate("/produtos");
        });
        promessa.catch((err) => {
            alert(`deu ruim, ${err.message}`);
        });
    }
    function cancelar() {
        navigate("/carrinho")
    }

    return (
        <>
            <Header />
            <form onSubmit={enviar}>

                <input
                    type="text"
                    placeholder='Digite seu CPF...'
                    onChange={e => setCPF(cpfMask(e.target.value))}
                    value={CPF}
                    required
                ></input>
                <button disabled type="submit">Finalizar</button>

            </form>
        </>
    )
}
