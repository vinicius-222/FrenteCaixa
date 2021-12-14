import styled from 'styled-components';

export const Clear = styled.div`
    height:100%;
`;

export const Container = styled.div`
    width:100%;
    height:auto;
    padding:5px;
    background-color:#26262E;
    display:flex;
    flex-wrap:wrap;
    justify-content:initial;
    border-radius:5px;
    box-shadow:2px 1px 3px #000;

    a{
        display:flex;
        text-decoration:none;
        width:100%;
        max-width:250px;
        background-color:#363A46;
        margin:10px;
        height:70px;
        border-radius:4px;
        cursor:pointer;

        .area--numero{
            height:70px;
            width:100px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#EEE;
            font-size:20px;
            font-weight:bold;
            background-color:#00B500;
            border-radius:4px 0px 0px 4px;
        }

        .area--title{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#EEE;
            font-size:16px;
            font-weight:bold;
            background-color:#038003;   
            border-radius:0px 4px 4px 0px;
            width:100%;
            height:100%;
        }
    }
    .info{
        padding:15px;
        color:#CCC;
        font-size:16px;

    }

`;

export const Footer = styled.div`
    pisition:fixed;
    display:inline-block;

    a{
        pisition:absolute;
        display:block;
        cursor:pointer;
        
        img{
            height:55px;
        }
    }
`;