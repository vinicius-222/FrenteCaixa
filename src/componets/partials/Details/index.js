import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Back from '../../../assets/images/Back.png';
import Clock from '../../../assets/images/Clock.png';
import People from '../../../assets/images/People.png';
import People1 from '../../../assets/images/People1.png';
import ButtonPay from '../../../assets/images/ButtonPay.png';
import Register from '../../../assets/images/Register.png'
import SalatoAPI from '../../../Helpers/SalatoAPI';
import Trash from '../../../assets/images/Trash.png'

const Detalhes = (props) => {
    const api = SalatoAPI();
    const [find, setFind] = useState('CA')

    const handleRegister = () => {
        let i = {"id":props.idbalcao, "VlTotal":props.consumopendente, "Venda":props.products};
        props.onRegister(i);
    }

    const handlePayment = (e)=>{
        e.preventDefault();
        window.location.href = '/Payment';
    }

    useEffect(()=>{
        props.onClickTopo();
    },[find])

    return(
        <Container>
            <div className="topo">
                <Link to="/">
                <img src={Back} />
                    {props.title}
                </Link>
            </div>
            <div className="body">
                <div className="areadetail">
                    <div className="areadetail--topo">
                        <div className="areadetail-number">
                            {props.id ? props.id: props.idbalcao}
                        </div>
                        <div className="areadetail--info">
                            <div className="areadetail--fieldtopo">
                                <div className="areadetail--field">
                                    <img src={Clock}/>
                                    00:00:26
                                </div>
                                <div className="areadetail--field">
                                    <img src={People}/>
                                    1
                                </div>
                                <div className="areadetail--field areadetail--fieldborder">
                                    <img src={People1}/>   
                                    Cliente
                                </div>
                            </div>
                            <div className="areadetail--valuetotal">
                                <label>CONSUMO TOTAL</label>
                                <label>R$ {props.consumoregister.toFixed(2).replace(".",",")}</label>
                            </div>
                            <div className="areadetail--valuetotal">
                                <label>VALOR PENDENTE</label>
                                <label>R$ {props.consumopendente.toFixed(2).replace(".",",")}</label>
                            </div>
                        </div>  
                    </div>
                    <div className="areaproducts">
                        <div className="areaproducts--info">
                            <label>PENDENTE DE ENVIO</label>
                            <div className="areaproducts--list">
                                {props.products.length <= 0 ? <div>Não há pedidos pendentes de envio</div>:''}
                                {props.products &&
                                    props.products.map((i,k)=>
                                        <div key={k} className="area--produts">
                                            <div className="area">
                                                <div className="area--title">{i.Nome}</div>
                                                <div className="area--input">{`${i.Quantidade}x R$${i.VlUnitario.toFixed(2).replace(".",",")} = R$${i.VlUnitarioTotal.toFixed(2).replace(".",",")}`}</div>
                                            </div>
                                            <div className="area--delete" onClick={()=>props.onDelete(k)}>
                                                <img src={Trash}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="areaproducts--info">
                            <label>PRODUTOS REGISTRADOS</label>
                            <div className="areaproducts--list">
                                {props.productsRegister.length <= 0 ? <div>Não há pedidos pendentes de envio</div>:''}
                                {props.productsRegister &&
                                    props.productsRegister.map((i,k)=>
                                        <div key={k} className="area--produts">
                                            <div className="area">
                                                <div className="area--title">{i.Nome}</div>
                                                <div className="area--input">{`${i.Quantidade}x R$${i.VlUnitario.toFixed(2).replace(".",",")} = R$${i.VlUnitarioTotal.toFixed(2).replace(".",",")}`}</div>
                                            </div>
                                            <div className="area--delete" onClick={()=>props.onDelete(k)}>
                                                <img src={Trash}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="areafind">
                    <div className="areafind--products">
                        <div className={find === 'CA'? 'ativo':''} onClick={()=>setFind('CA')}>CATEGORIAS</div>
                        <div className={find === 'CO'? 'ativo':''} onClick={()=>setFind('CO')}>COMBOS</div>
                        <div className={find === 'BU'? 'ativo':''} onClick={()=>setFind('BU')}>BUSCA</div>
                    </div>
                    {find === 'CA'?props.sourceCat:''}
                    {find === 'BU'?props.sourceFind:''}
                    {find === 'CO'?props.sourceCombo:''}
                </div>
            </div>
            <div className="areafooter">
                <Link to='/Payment' onClick={()=>props.setVlVenda(props.consumoregister.toFixed(2).replace(".",","))}>
                    <img src={ButtonPay} alt="Pagamento"/>
                </Link>
                {props.products.length > 0 &&
                    <div onClick={handleRegister}>
                        <img src={Register} alt="Registrar"/>
                    </div>
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setVlVenda:(VlVenda)=>dispatch({type:'SET_VLVENDA', payload:{VlVenda}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detalhes);