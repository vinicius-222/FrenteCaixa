import React,{ useState, useEffect} from 'react';
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
    margin:${props=>props.marginVert || 0} ${props=>props.marginHor || 0}px ;
    transition:all ease 0.6s;
    margin-right:${props=>props.marginRight || 10}px;
    margin-top:${props=>props.marginTop || 10}px;;

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

    .areacheck{
        width:5px;
        height:5px;
        cursor:pointer;
    }

    label{
        color:#FFF;
        cursor:pointer;
    }

`;


const ButtonCheck = (props) => {
    const [StLoja, setStLoja] = useState(props.stSelect || false);
    
    const handleClick = () =>{
        if(props.onClick){
            setStLoja(!StLoja);
            props.onClick();
        }else{
            setStLoja(!StLoja);
        }
        
    }

    useEffect(()=>{
        setStLoja(props.stSelect);
    },[props.stSelect])

    return(
        <Container onClick={()=>handleClick()} backgroundcolor={StLoja ?"#F7AB00":"#6A6A6A"} backgroundhover="##F7AB00" width={props.width} height={props.height} marginVert={props.margin} marginTop={props.marginTop} marginRight={props.marginRight} >
            <div className="areacheck"></div>
            <label>{props.nome}</label>
        </Container>
    )
}

export default ButtonCheck;