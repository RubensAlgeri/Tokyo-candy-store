import styled from 'styled-components';

import menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';

export default function Header() {
    return (
        <Div>
            <img src={menu} alt="menu" />
            <img className='logo' src={logo} alt="logo" />
            <img src={cart} alt="cart" />
        </Div>
    )
}

// styledComponents
const Div = styled.div`
    background-color: #FFFFFF;
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