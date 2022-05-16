
import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
body{
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    width: 100vw;
    height: 100vh;
    background: #CEAFFF;
}
a{
    text-decoration: none;
    color: #FFFFFF;
}
input{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: left;
    width: 303px;
    height: 45px;
    margin-bottom: 13px;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
}
input::placeholder{
    font-size: 20px;
    line-height: 23px;
    color: #B84FCE;
    text-align: center;
}
button{
    background: #A564D3;
    color: #ffffff;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    border-radius: 5px;
    border: none;
}
ion-icon{
    color: #A564D3;
    font-size: 23px;
}
`
export default Style;