import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckDropDown from '../assets/images/Down.png';
import Go from '../assets/images/Go.png'

const Container = styled.div`
    width:${props=>props.width || 300}${props=>props.medida || "px"};
    height:${props=>props.height || 40}px;

        .areadrop{
            width:100%;
            height:${props=>props.height || 40}px;
            justify-content:space-between;
            padding:10px;
            display:flex;
            background-color:#444955;
            border-radius:3px;
            cursor:pointer;
            
            img{
                width:25px;
                height:20px;
    
            }
        }
       
        .area{
            position:absolute;
            width:${props=>props.subwidth || 300}${props=>props.medida || "px"};
            height:300px;
            background-color:#32323E;
            overflow:scroll;
            padding:5px;
            border-radius:0px 0px 4px 4px;
            flex-direction:row;

            .area--title{
                width:100%;
                height:auto;
                cursor:pointer;
                padding:10px;
                justify-content:space-between;
                display:flex;
                color:#FFF;
                border-bottom:0.1px solid #999;

                &:hover{
                    background-color:#444856;
                }

                img{
                    width:15px;
                }
            }
        }
`;

const DropDown = (props) => {
    const [id, setId] = useState(0);
    const [formaPagamento, setFormaPagamento] = useState(props.formasPagamento);
    const [tipo, setTipo] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [show, setShow] = useState(false);
    const [nomeFormaPagamento, setNomeFormaPagamento] = useState('FORMA DE PAGAMENTO');


    const handleClickN1 = (i,k) => {
        if(i.Tipo){
            setFormaPagamento([]);
            setTipo(i.Tipo);
        }else{
            setId(i.id);
            setNomeFormaPagamento(i.Nome);
            setTipo([]);
            setFormaPagamento(props.formasPagamento)
            props.onClick(i);
            setShow(false);
        }
    }

    const handleClickN2 = (i,k) =>{
        if(i.Tipos){
            setTipo([]);
            setTipos(i.Tipos);
        }else{
            setId(i.id);
            setNomeFormaPagamento(i.Nome);
            setTipos([]);
            setFormaPagamento(props.formasPagamento);
            props.onClick(i);
            setShow(false);
        }
    }

    useEffect(()=>{
        if(show){
            setFormaPagamento(props.formasPagamento);
        }else{
            setFormaPagamento([]);
            setTipo([]);
            setTipos([]);
        }
    },[show])
    
    return(
        <Container width={props.width} medida={props.medida} height={props.height} subwidth={props.subwidth}>
            <div className="areadrop" onClick={()=>setShow(!show)}>
                <label>{nomeFormaPagamento}</label>
                <img src={CheckDropDown}/>
            </div>
            <div className="area" style={{display:show?"block":"none"}}>
                {formaPagamento && 
                    formaPagamento.map((i,k)=>
                        <div className="area--title" onClick={()=>handleClickN1(i,k)}>
                            <laabel>{i.Nome}</laabel>
                            <img src={Go}/>
                        </div>
                    )
                }

                {tipo &&
                    tipo.map((i,k)=>
                        <div className="area--title" onClick={()=>handleClickN2(i,k)}>
                            <laabel>{i.Nome}</laabel>
                            <img src={Go}/>
                        </div>
                    )
                }

                {tipos &&
                    tipos.map((i,k)=>
                        <div className="area--title" onClick={()=>handleClickN2(i,k)}>
                            <laabel>{i.Nome}</laabel>
                            <img src={Go}/>
                        </div>
                    )

                }
            </div>
        </Container>
    )
}

export default DropDown;