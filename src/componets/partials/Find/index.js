import React, {useState, useEffect, useRef} from 'react';
import {Container} from './styled';
import {ButtonOption} from '../../MainComponents';
import SalatoAPI from '../../../Helpers/SalatoAPI';
import {ButtonPadrao} from '../../MainComponents';
import ModalAdd from '../../ModalAdd';

let time;
const Find = (props) => {
    const useBusca = useRef();
    const api = SalatoAPI();
    const [tpOption, setTpOption] = useState('N');
    const [Listproducts, setListProducts] = useState([]);
    const [textPesquisa, setTextPesquisa] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState([]);

    const getProductsList = async()=>{
        const json = await api.getProductsList();
        setListProducts(json);
    }

    const handleOpemModal = (i) => {
        setProduct(i)
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const addItem = (p) =>{
        props.onClickProducts(p);
    }

    useEffect(()=>{
        if (time){
            clearTimeout(time);
        }

        time = setTimeout(()=>{
            if (textPesquisa){
                getProductsList();
            }else{
                setListProducts([]);
            }
        },1000)
    },[textPesquisa])

    useEffect(()=>{
        useBusca.current.focus();
    },[])

    return(
        <Container>
            <ModalAdd visible={showModal} product={product} onClose={handleCloseModal} onClickProducts={(p)=>addItem(p)}/>
            <div className="areainput">
                <input 
                    placeholder="DIGITE UM TEXTO PARA PESQUISA"
                    value={textPesquisa}
                    onChange={(e)=>setTextPesquisa(e.target.value)}
                    ref={useBusca}
                />
            </div>
            <div className="areatp">
                <label>Buscar por:</label>
                <ButtonOption backgroundcolor={tpOption === 'N'?'#F7AB00':'#6A6A6A'} onClick={()=>setTpOption('N')}>Nome do Produto</ButtonOption>
                <ButtonOption backgroundcolor={tpOption === 'C'?'#F7AB00':'#6A6A6A'} onClick={()=>setTpOption('C')}>Codigo Interno</ButtonOption>
                <ButtonOption backgroundcolor={tpOption === 'B'?'#F7AB00':'#6A6A6A'} onClick={()=>setTpOption('B')}>Codigo de Barras</ButtonOption>
            </div>
            <div className="arearesult">
                {Listproducts &&
                    Listproducts.map((i,k)=>
                        <div className="arearesult--item">
                            <div className="arearesult--title">
                                <label>{i.Nome}</label>
                                <label className="labelid">{`Codigo ${i.id}`}</label>
                            </div>
                            <div className="arearesult--price">
                                <label>{`R$ ${i.VlUnitario.toFixed(2).replace(".",",")}`}</label>
                            </div>
                            <div className="arearesult--button">
                                <ButtonPadrao onClick={()=>handleOpemModal(i)} width={90} height={30} backgroundcolor="transparent" bordercolor="#4F86A1">ADICIONAR</ButtonPadrao>
                            </div>
                        </div>
                    )
                }
                <div className="areaclear"></div>
            </div>
        </Container>
    )
}

export default Find;