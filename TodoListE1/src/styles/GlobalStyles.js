import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        
        margin: 0;
        user-select: none;
        background: rgba(0, 0, 0, 0);
        color: black;
        font-family: 'Roboto', sans-serif;
    }
    :root {
        --background: #bed4ff
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

    }
    button{
        
        background: #bed4ff;
        border: 1px solid black;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background: #a3c1ff;
        }
        width: 200px;
        margin-top: 20px;
    }
    p{
        font-size: 20px;
        font-weight: 600;
        text-decoration: underline;
    }
    h1{
        font-size: 30px;
        font-weight: 600;
        
    }
    input{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1b263b;
        border: 2px solid #bed4ff;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background: #415a77;
        }
        gap: 20px;
        size: 200px;
        margin-top: 20px;
        color: white;
    }

    
`;

export default GlobalStyles;
