import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import People from '../assets/images/People.png'


const Container =  styled.div`
    width:120px;
    height:30xp;
    display:flex;
    justify-content:space-between;

    .infoCliente{
        width:30px;
        height:30px;
        display:flex;

        img{
            width:2px;
            height:15px;
        }
    }

    .button{
        width:18px;
        height:18px;
        border-radius:9px;
        margin:0px 5px;
        text-align:center;
        cursor:pointer;
        font-wight:bold;
    }
    .buttonDel{
        background-color:#FF0000;
    }

    .buttonAdd{
        background-color:#00B700;
    }
`;


const ButtonAddCliente = (props) => {
    const [nrPeople, setNrPeople] =useState(1);

    const click = (n) => {
        props.onClick(n);
    }

    return(
        <Container>
            <div className="button buttonDel" onClick={()=>{
                    if(nrPeople > 1){
                        setNrPeople(nrPeople-1);
                        click(nrPeople-1);
                    }
                }}>-</div>
            <div className="infoCliente">
                <img src={People}/>
                <label>{nrPeople}</label>  
            </div>      
            <div className="button buttonAdd" onClick={()=>{
                    setNrPeople(nrPeople+1)
                    click(nrPeople+1);
            }}>+</div>    
        </Container>
    )
}

export default ButtonAddCliente;