import React, { useState, useRef } from 'react';
import { Container } from './styled';
import Close from '../../../assets/images/Close.png'
import Down from '../../../assets/images/Down.png';
import ModalAdd from '../../ModalAdd';


const Categories = (props) => {
    const useBusca = useRef(null);
    const [nomeCat, setNomeCat] = useState('');
    const [stDrop, setStDrop] = useState(false);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState([]);
    const [quantidade, setQuantidade] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const handleCategorie = (i) => {
        setNomeCat(i.Nome);
        props.onClickCategorie(i);
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

    return(
        <Container>
             <ModalAdd visible={showModal} product={product} onClose={handleCloseModal} onClickProducts={(p)=>addItem(p)}/>
            <div className="topo">
                <div className="close" onClick={()=>{
                    setNomeCat('');
                    props.onClickCategorie();
                }}>
                    <img src={Close}/>
                </div>
                <div className="dropdown" onClick={()=>setStDrop(!stDrop)}>
                    <label>Categorias</label>
                    <img src="https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif"/>
                    <div className="dropdown--sub" style={{display:stDrop?'block':'none'}}>
                        {props.categories &&
                            props.categories.map((i,k)=>
                                <div key={k}>
                                    <div className="dropdown--title" onClick={()=>handleCategorie(i)}>{i.Nome}</div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {nomeCat &&
                    <div className="dropdown--large">
                        <label>{nomeCat}</label>
                        <div className="area--image">
                            <img src={Down}/>
                        </div>
                    </div>
                }
            </div>
            {props.categories && !nomeCat &&
                props.categories.map((i,k)=>
                    <div key={k} className="area" onClick={()=>handleCategorie(i)}>
                        {i.Nome}
                    </div>
                )
            }

            {props.product &&
                props.product.map((i,k)=>
                    <div key={k} className="areaproducts" onClick={()=>handleOpemModal(i)}>
                        <div className="areaproducts--title">{i.Nome}</div>
                        <hr />
                        <div className="areaproducts--value">R$ {i.VlUnitario.toFixed(2).replace(".",",")}</div>
                    </div>
                )
            }
        </Container>
    )
}

export default Categories;