import axios from "axios";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
// import background from "../assets/background.png"

export default function TelaCadastro() {
    const [cadastro, setCadastro] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
    });
    const { email, password, name, confirmPassword } = cadastro;

    const navigate = useNavigate();

    function cadastrar(event) {
        event.preventDefault();
        const promessa = axios.post(
            "https://projeto14-tokyo-candy-store.herokuapp.com/sign-up",
            { email, password, username: name }
        );
        promessa.then(() => {
            navigate("/");
        });
        promessa.catch((err) => {
            alert(`deu ruim, ${err.message}`);
        });
    }

    return (
        <Cadastro>
            <img src={logo} alt="logo" />
            <form onSubmit={cadastrar}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={cadastro.name}
                    onChange={(e) =>
                        setCadastro({ name: e.target.value, email, password, confirmPassword })
                    }
                    required
                ></input>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={cadastro.email}
                    onChange={(e) =>
                        setCadastro({ email: e.target.value, password, name, confirmPassword })
                    }
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Senha"
                    value={cadastro.password}
                    onChange={(e) =>
                        setCadastro({ password: e.target.value, email, name, confirmPassword })
                    }
                    required
                ></input>
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={cadastro.confirmPassword}
                    onChange={(e) =>
                        setCadastro({ confirmPassword: e.target.value, email, password, name })
                    }
                    required
                ></input>
                {password === confirmPassword ? (
                    <button type="submit">Cadastrar</button>
                ) : (
                    <button disabled type="submit">Cadastrar</button>
                )}

            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
            {/* <img class="background" src={background} alt="background" /> */}
        </Cadastro>
    );
}
const Cadastro = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100vw;
img{
    width: 280px;
    height: 56px;
    margin: 67px auto;
}
form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 500px;
}
button {
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
}
/* .background{
    margin: 0 auto;
    position: fixed;
    width: 375px;
    height: 166px;
    left: 19.89px;
    top: 501px;

    mix-blend-mode: luminosity;
    rotate:(3.64deg);
} */
`;