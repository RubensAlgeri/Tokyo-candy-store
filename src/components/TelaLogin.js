import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import dotenv from "dotenv";
import logo from "../assets/logo.png"

import UserContext from '../contexts/UserContext';
dotenv.config()

export default function TelaLogin() {
    const [login, setLogin] = useState({ email: "", password: "" })
    const { email, password } = login;
    const setUserData = useContext(UserContext).setUserData


    const navigate = useNavigate();


    function logar(event) {
        event.preventDefault();
        const promessa = axios.post("https://projeto14-tokyo-candy-store.herokuapp.com/sign-in", { email, password })
        promessa.then(resposta => {
            setUserData({ name: resposta.data.name, token: resposta.data.token })
            navigate("/home")
        })
        promessa.catch(err => {
            alert(`deu ruim, ${err.message}`)
        })
    }

    return (
        <Login>
            <img src={logo} alt="logo" />
            <form onSubmit={logar}>

                <input type="email" placeholder="E-mail" value={login.email} onChange={(e) => setLogin({ email: e.target.value, password })} required></input>
                <input type="password" placeholder="Senha" value={login.password} onChange={(e) => setLogin({ password: e.target.value, email })} required></input>
                <button type="submit">Entrar</button>

            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>

        </Login>
    )
}
const Login = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: auto;
img{
    width: 280px;
    height: 56px;
    margin: 67px auto;
}
form{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 500px;
}
button{
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
}
`