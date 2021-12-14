import React from 'react';
import styled from 'styled-components';
import ImgCheckPay from '../assets/images/CheckPay.png'

const Container = styled.div`
    width:150px;
    height:30px;
    margin:5px 5px;
    display:flex;

    label{
        color:#FFF;
        margin:0px 10px;
    }

    .area--check{
        height:24px;
        width:24px;
        display:flex;
        justify-content:center;
        align-items:center;
        border:2px solid #96979D;
        border-radius:3px;
        cursor:pointer;

        img{
            width:14px;
        }
    }

    .areacheckAtivo{
        border:2px solid #EB8600;
        border-radius:3px;
    }
`;


const ButtonCheckPay = (props) =>{
    return(
        <Container>
            <div className={props.value ?"area--check areacheckAtivo":"area--check"} onClick={()=>props.onChange()}>
                {props.value &&
                    <img src={ImgCheckPay}/>
                }
            </div>
            <label>{props.title}</label>
        </Container>
    )
}

export default ButtonCheckPay;