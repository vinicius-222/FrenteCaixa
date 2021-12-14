import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {ButtonPadrao} from './MainComponents';
import ButtonIncre from './ButtonIncre';

const Container = styled.div`

    .ModalArea{
        display:none;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0;
        background-color:transparent;
        transition:all ease .7s;
        justify-content:center;
        align-items:center;
        overflow-y:auto;

        .ModalBody{
            display:none;
            position:fixed;
            flex-direction:column;
            background-color:#1F2127;
            width:530px;
            min-height:380px;
            height:380px;
            opacity:0;
            border-radius:3px;
            display:flex;
            transition:all ease .7s;

            .topomodal{
                width:100%;
                height:60px;
                background-color:#17181D;
                padding:8px;
                display:flex;
                flex-direction:row;
                justify-content:space-between;

                label{
                    font-size:20px;
                    color:#FFF;
                }

                .labelvalue{
                    color:#A87821;
                    font-size:20px;
                    margin-right:30px;
                }
            }

            .areaFechar{
                display:flex;
                position:absolute;
                justify-content:center;
                align-items:center;
                color:#FFF;
                width:30px;
                height:30px;
                border-radius:15px;
                cursor:pointer;
                top:0px;
                right:0px;
            }

            .bodymodal{
                width:100%;
                height:250px;

                .area--input{
                    width:100%;
                    height:60px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    
                    input{
                        height:40px;
                        width:90%;
                        outline:0;
                        border:1px solid #A87821;
                        background-color:#454955;
                        border-radius:5px;
                        color:#FFF;
                        padding:10px;
                    }
                }
            }
            .area--complemento{
                overflow:auto;
                width:100%;
                max-height:190px;
            }
            
            .clear{
                height:100%;
                width:100%;
            }

            .footermodal{
                height:70px;
                min-height:70px;
                width:100%;
                background-color:#17181D;
                display:flex;
                align-items:center;
                padding:15px;
                
                .inputObs{
                    outline:0;
                    height:35px;
                    width:200px;
                    background-color:#454955;
                    border-radius:4px;
                    border:0px;
                    padding:5px;
                    color:#FFF;
                }
            }
        }
    }
`;

const ModalAdd = (props) => {
    const useBusca = useRef(null);
    const [modal, setModal] = useState(false);
    const [quantidade, setQuantidade] = useState(1)

    const handleFechaModal = (i) => {
       props.onClose();
    }


    const addPedido = () =>{
        let valor = 0;
        valor = quantidade * props.product.VlUnitario;
        let p = {"id":props.product.id, "Nome":props.product.Nome, "VlUnitario":props.product.VlUnitario, "Quantidade":quantidade, "VlUnitarioTotal":valor};
        props.onClickProducts(p);
        handleFechaModal();
    }

    const handleIncremento = () => {
        setQuantidade(quantidade+1);
    }

    const handleDecremento = () => {
        if(quantidade > 1){
            setQuantidade(quantidade-1);
        }
    }

    useEffect(()=>{
        if(props.visible){
            setQuantidade(1);
            document.querySelector('.ModalBody').style.display = "flex";
            document.querySelector('.ModalArea').style.display = "flex";    

            setTimeout(()=>{
                document.querySelector('.ModalBody').style.opacity = 1;
                document.querySelector('.ModalArea').style.opacity = 1;
                document.querySelector('.ModalArea').style.backgroundColor ="rgba(0,0,0,.7)";
            },500)
            useBusca.current.focus();
        }else{
            document.querySelector('.ModalBody').style.opacity = 0;
            document.querySelector('.ModalArea').style.opacity = 0;
            document.querySelector('.ModalArea').style.backgroundColor = "transparent";
            setTimeout(()=>{
                document.querySelector('.ModalBody').style.display = "none";
                document.querySelector('.ModalArea').style.display = "none";    
            },500)
        }
    },[props.visible])

    return(
        <Container>
            <div className="ModalArea">
                <div className="ModalBody">
                    <div onClick={handleFechaModal} className="areaFechar">X</div>
                    <div className="topomodal">
                        <label>{props.product.Nome}</label>
                        <label className="labelvalue">{props.product.VlUnitario && `R$ ${props.product.VlUnitario.toFixed(2).replace(".",",")}`}</label>
                    </div>
                    <div className="bodymodal">
                        <div className="area--input">
                            <input 
                                placeholder="BUSCA DE COMPLEMENTOS (NOME,OU CODIGO INTERNO)"
                                ref={useBusca}
                            />
                        </div>
                        <div className="area--complemento">
            
                        </div>
                    </div>
                    <div className="clear">
            
                    </div>
                    <div className="footermodal">
                        <input 
                            className="inputObs"
                            placeholder="OBSERVAÇÕES DO PEDIDO"
                        />
                        <ButtonIncre 
                            quantidade={quantidade}
                            onClickIncremento={handleIncremento}
                            onClickDecremento={handleDecremento}
                        />
                        <ButtonPadrao 
                            onClick={addPedido} 
                            backgroundcolor="#8EBA00" 
                            backgroundhover="#ABD914" 
                            width={150}
                        >ADICIONAR</ButtonPadrao>
                    </div>
                </div>
            </div>
       </Container>
    )
}
 
export default ModalAdd;