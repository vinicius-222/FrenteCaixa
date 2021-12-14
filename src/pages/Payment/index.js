import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import { connect } from 'react-redux';
import Continua from '../../assets/images/ContinuaConsumo.png';
import Fechar from '../../assets/images/FecharVenda.png';
import Imprime from '../../assets/images/ImprimirCupon.png';
import Preconta from '../../assets/images/PreConta.png';
import Clock from '../../assets/images/Clock.png';
import ButtonAddCliente from '../../componets/ButtonAddCliente';
import ButtonCheckPay from '../../componets/ButtonCheckPay';
import { Line } from '../../componets/MainComponents';
import DropDown from '../../componets/DropDown';
import SalatoAPI from '../../Helpers/SalatoAPI';
import {cpfMask, MoneyMask} from '../../componets/Mask'
import Trash from '../../assets/images/Trash.png';

const Payment = (props) => {
    const api = SalatoAPI();
    const [checkDesconto, setCheckDescont] = useState(false);
    const [checkAcrescimo, setCheckAcrescimo] = useState(false);
    const [find, setFind] = useState('CA');
    const [formaPagamentos, setFormaPagamentos] = useState([]);
    const [vlPagamento, setVlPagamento] = useState(MoneyMask(parseFloat(props.VlVenda).toFixed(2)));
    const [vlTotalPago, setVlTotalPago] = useState(MoneyMask('0,00'));
    const [vlConta, setVlConta] = useState(MoneyMask(parseFloat(props.VlVenda).toFixed(2)));
    const [vlRestante, setVlRestante] = useState(MoneyMask(parseFloat(props.VlVenda).toFixed(2)));
    const [vlPessoa, setVlPessoa] = useState(MoneyMask('0.00'));
    const [vlTroco, setVlTroco] = useState(MoneyMask('0.00'));
    const [vlDesconto, setVlDesconto] = useState(MoneyMask('0.00'));
    const [vlAcrescimo, setVlAcrescimo] = useState(MoneyMask('0.00'));
    const [vlTotalConta, setVlTotalConta] = useState(MoneyMask('0.00'));
    const [vlServicoNaoPago, setvlServicoNaoPago] = useState(MoneyMask('0.00'));
    const [nrCPF, setNrCPF] = useState(null);
    const [nrPessoa, setNrPessoa] = useState(1);
    const [formaPagamento, setFormaPagamento] = useState([]);
    const [idPagamento, setIdPagamento] = useState(0);
    const [NomePagamento, setNomePagamento] = useState('');

    const getFormasPagamentos = async () => {
        const json = await api.getFormasPagamentos();
        setFormaPagamentos(json);
    }

    const handleAdd = (i) =>{
        let p = [];
        p = formaPagamento;
        p.push({"id":idPagamento,"Nome":NomePagamento, "Valor":vlPagamento})
        setFormaPagamento([]);
        setTimeout(()=>{
            setFormaPagamento(p);
        },1)
    }

    const handlePagamento = (e) => {
        setIdPagamento(e.id)
        setNomePagamento(e.Nome)
    }

    const SomaPagamentos = () =>{
        let VlTotal = 0.00;
        for(let i in formaPagamento){
            let v = formaPagamento[i].Valor.replace("R$","").replace(",",".");
            VlTotal = VlTotal + parseFloat(v);

        }
        let v = parseFloat(vlTotalConta.replace('R$','').replace(',','.'));
        let r = VlTotal - v;
        setVlTroco(MoneyMask(VlTotal > v?r.toFixed(2):'0,00'))
        setVlPagamento(MoneyMask(VlTotal > v ?'0,00':r.toFixed(2)));
        setVlTotalPago(MoneyMask(VlTotal.toFixed(2)));
        setVlRestante(MoneyMask(VlTotal > v ?'0,00':r.toFixed(2)))
    }

    const handleDelete = (k) =>{
        let p =[];
        p =formaPagamento;
        p.splice(k,1);
        setFormaPagamento([]);
        setTimeout(()=>{
            setFormaPagamento(p);
        },1)
    }

    const formatValue = (v) => {
        return v.replace('R$','').replace(',','.');
    }

    const handlePessoa = (n) => {
        setNrPessoa(n);
        let v = formatValue(vlTotalConta);
        let r = v / n;
        setVlPessoa(MoneyMask(r.toFixed(2)))
    }

    useEffect(()=>{
        handlePessoa(1)
    },[vlTotalConta]);

    useEffect(()=>{
        SomaPagamentos();
    },[vlTotalConta, formaPagamento])

    useEffect(()=>{
        let desconto = formatValue(vlDesconto);
        let acrescimo = formatValue(vlAcrescimo);
        let serviconaopago = formatValue(vlServicoNaoPago);
        let consumo = formatValue(vlConta);
        let conta = parseFloat(consumo) + parseFloat(acrescimo) - parseFloat(desconto) - parseFloat(serviconaopago);
        setVlTotalConta(MoneyMask(conta.toFixed(2)));
    },[vlDesconto, vlAcrescimo, vlServicoNaoPago, vlPagamento])
   
    useEffect(()=>{
        getFormasPagamentos();
    },[])
    return(
        <Container>
            <div className="body">
                <div className="areadetail">
                    <div className="areadetail--topo">
                        <div className="areadetail-number">
                            1
                        </div>
                        <div className="areadetail--info">
                            <div className="areadetail--fieldtopo">
                                <div className="areadetail--field">
                                    <img src={Clock}/>
                                    00:00:26
                                </div>
                                <div className="areadetail--field">
                                    <ButtonAddCliente onClick={(n)=>handlePessoa(n)}/>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="areacheck">
                        <ButtonCheckPay 
                            value={checkDesconto}
                            onChange={()=>setCheckDescont(!checkDesconto)}
                            title="Desconto (-)"
                        />
                        <label>{vlDesconto}</label>
                    </div>
                    <Line width={100}/>
                    <div className="areacheck">
                        <ButtonCheckPay 
                            value={checkAcrescimo}
                            onChange={()=>setCheckAcrescimo(!checkAcrescimo)}
                            title="Acrescimo (+)"
                        />
                        <label>{vlAcrescimo}</label>
                    </div>
                    <div className="area">
                        <label className="area--title">Consumo Total</label>
                        <label className="area--price">{vlConta}</label>
                    </div>
                    <div className="area">
                        <label className="area--title">Serviço não pago</label>
                        <label className="area--price">{vlServicoNaoPago}</label>
                    </div>
                    <div className="area">
                        <label className="area--title area--total">Total da Conta</label>
                        <label className="area--price area--total">{vlTotalConta}</label>
                    </div>
                    <div className="area">
                        <label className="area--title area--total">Total da Pago</label>
                        <label className="area--price area--total">{vlTotalPago}</label>
                    </div>
                    <div className="area">
                        <label className="area--title area--restante">Valor Restante</label>
                        <label className="area--price area--restante">{vlRestante}</label>
                    </div>
                    <div className="area">
                        <label className="area--title area--troco">Troco</label>
                        <label className="area--price area--troco">{vlTroco}</label>
                    </div>
                    <div className="area">
                        <label className="area--title area--troco">{`Valor divido por ${nrPessoa}`}</label>
                        <label className="area--price area--troco">{vlPessoa}</label>
                    </div>
                    <div className="area">
                        <label className="area--title">Observação</label>
                    </div>
                </div>
                <div className="areainfo">
                    <div className="areainfo--dados">
                        <div className={find === 'CA'? 'ativo':''} onClick={()=>setFind('CA')}>PAGAMENTO</div>
                        <div className={find === 'CO'? 'ativo':''} onClick={()=>setFind('CO')}>CONSUMO</div>
                    </div>
                    {find === 'CA'?
                    <>
                        <div className="areainfo--pagamentos">
                            <label>PAGAMENTO</label>
                            <div className="areainfo--dadospagamento">
                                <DropDown  medida="%" width={35} subwidth={21} formasPagamento={formaPagamentos} onClick={(e)=>handlePagamento(e)}/>
                                <input 
                                    placeholder="CPF"
                                    className="areaCPFCNPJ"
                                    value={nrCPF}
                                    onChange={(e)=>setNrCPF(cpfMask(e.target.value))}
                                />
                                <input 
                                    className="areaValue"
                                    value={vlPagamento}
                                    onChange={(e)=>setVlPagamento(MoneyMask(e.target.value))}

                                />
                                <div className="areabutton" onClick={handleAdd}>
                                    <label>PAGAR</label>
                                </div>
                            </div>
                        </div>
                        <div className="areainfo--listapagamentos">
                            {formaPagamento.length > 0 ?
                                formaPagamento.map((i,k)=>
                                    <div className="area--lista">
                                        <label>{i.Nome}</label>
                                        <label>{i.Valor}</label>
                                        <div>
                                            <img src={Trash} onClick={()=>handleDelete(k)}/>
                                        </div>
                                    </div>
                                )
                            :
                                <div className="area--lista">
                                    <label>Não há Pagamentos</label>
                                </div>
                            }

                        </div>
                    </>
                    :''}
                    {find === 'CO'?
                        <div className="areaproducts">
                            {props.vendasMesa &&
                                props.vendasMesa[props.indexvendasMesas].Venda.map((i,k)=>
                                    <div className="areaproducts--list">
                                        <div className="areaproducts--title">{i.Nome}</div>
                                        <div className="areaproducts--dados">{`Qunatidade ${i.Quantidade} x Valor Unitario ${MoneyMask(i.VlUnitario.toFixed(2))} = Total ${MoneyMask(i.VlUnitarioTotal.toFixed(2))}`}</div>    
                                    </div>
                            )}
                        </div>
                    :''}
                </div>
                <div className="areafooter">
                    <div onClick={()=>window.history.go(-1)}>
                        <img src={Continua} alt="Pagamento"/>
                    </div>
                    <div >
                        <img src={Fechar} alt="Registrar"/>
                    </div>
                    <div >
                        <img src={Imprime} alt="Registrar"/>
                    </div>
                    <div >
                        <img src={Preconta} alt="Registrar"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        VlVenda:state.vendas.VlVenda,
        vendasMesa:state.vendas.vendasMesa,
        vendasBalcao:state.vendas.vendasBalcao,
        indexvendasMesas:state.vendas.indexvendasMesas
    }
}
export default connect(mapStateToProps)(Payment);