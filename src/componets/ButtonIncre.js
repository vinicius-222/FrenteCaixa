import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:35px;
    width:150px;
    display:flex;
    justify-content:center;
    align-items:center;

    .valor{
        width:50px;
        height:35px;
        background-color:#454955;
        border-radius:4px;
        margin:10px 5px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#FFF;
    }

    .button{
        width:26px;
        height:26px;
        border-radius:13px;
        color:#FFF;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:24px;

        div{
            display:flex;
            justify-content:center;
            align-items:center;
            display:flex;
            margin-top:-6px;
            cursor:pointer;
            height:5px;
        }
    }

    .dec{
        background-color:#C30019;
    }

    .inc{
        background-color:#95C008; 
    }
`;

const ButtonIncre = (props) => {
    return(
        <Container>
            <div className="button dec" onClick={()=>props.onClickDecremento()}>
            <div>-</div></div>
            <div className="valor">{props.quantidade}</div> 
            <div className="button inc" onClick={()=>props.onClickIncremento()}>
            <div>+</div></div>
        </Container>
    )
}

export default ButtonIncre;