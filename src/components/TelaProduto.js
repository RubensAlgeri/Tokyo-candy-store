import styled from 'styled-components';
import add from '../assets/add.svg';
import remove from '../assets/remove.svg';

import Header from "./Header";

export default function TelaProdutos() {
    return (
        <>
            <Header/>
            <Main>
                <div className='image'>
                    <img src='https://www.japancandystore.com/media/catalog/product/cache/11/image/563x/040ec09b1e35df139433887a97daa66f/2/0/20220124_091.jpg' alt="product"/>
                </div>
                <div className='info'>Ace Milk Strawberry Pudding Treats</div>
                <div className='description'>This pack of yummy pudding treats is perfect for snacktime with your friends! It has milk and strawberry flavors for you to enjoy!</div>
                <div className='container'>
                    <div className='quantity'>
                        <img src={add} alt="add"/>
                        <p>1</p>
                        <img src={remove} alt="remove"/>
                    </div>
                    <div className='price'>$12.90</div>
                </div>
                <button>Add to Cart</button>
            </Main>
        </>
    )
}

// styledComponents
const Main = styled.div`
    box-sizing: border-box;
    padding-top: 80px;
    padding-left: 25px;
    padding-right: 25px;
    width: 100%;
    height: 100vh;
    background-color: #F1E8FF;
    text-align: center;
    .image{
        background-color: white;
        width: 300x;
        height: 300px;
        border-radius: 5px;
        border: 1px solid #A564D3;
        box-sizing: border-box;
        padding: 5px;
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover; 
    }
    .info{
        font-size: 20px;
        font-family: 'Raleway';
        font-weight: 800;
        font-style: normal;
        color: #A564D3;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .description{
        font-size: 15px;
        font-family: 'Raleway';
        font-weight: 400;
        font-style: normal;
        margin-bottom: 20px;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .quantity{
        display: flex;
    }
    .quantity img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }
    button {
        width: 203px;
        height: 40px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color : #A564D3;
    }
`;