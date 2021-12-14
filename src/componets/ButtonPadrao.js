import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.backgroundcolor || '#000E2D'};
    height:${props=>props.height || 40}px;
    width:${props=>props.width || 120}px;
    border-radius:5px;
    margin:${props=>props.margin || 0};
    border:0.5px solid ${props=>props.bordercolor || ''};
    transition:all ease 0.6s;

    &:hover{
        transition:all ease 1s;
        background-color:${props=>props.backgroundhover || '#005E8A'};
    }
    a{  
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        height:100%;
        width:100%;
        color:${props=>props.color || '#FFF'};;
    }
`;


const ButtonPadrao = (props) => {
    const handleClick = () =>{
        if(props.onClick){
            props.onClick();
        }
    }

    return(
        <Container onClick={()=>handleClick()} backgroundcolor={props.backgroundcolor} backgroundhover={props.backgroundhover} bordercolor={props.bordercolor} width={props.width} height={props.height} margin={props.margin}>
            <Link to={props.url}>{props.title}</Link>
        </Container>
    )
}

export default ButtonPadrao;