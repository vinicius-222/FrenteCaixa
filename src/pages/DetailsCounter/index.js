import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import SalatoAPI from '../../Helpers/SalatoAPI';
import Categ from '../../componets/partials/Categories';
import Details from '../../componets/partials/Details';
import Combo from '../../componets/partials/Combo';
import {connect} from 'react-redux';
import { useLocation } from 'react-router-dom';
import {LoadTela} from '../../componets/Loading';
import Find from '../../componets/partials/Find';

const DetailsCounter = (props) => {
    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    const api = SalatoAPI();
    const [find, setFind] = useState('CA')
    const [Categories, setCategories] = useState([]);
    const [getProduct, setGetProduct] = useState([]);
    const [ProductsPendente, setProductsPendente] = useState([]);
    const [ConsumoPendente, setConsumoPendente] = useState(0);
    const [ConsumoRegister, setConsumoRegister] = useState(0);
    const [idBalcao, setIdBalcao] = useState(0);
    const [ProductsRegister, setProductsRegister] = useState([]);
    const [id, setId] = useState(query.get('id') ? query.get('id'):-1);
    const [load, setLoad] = useState(false);

    const getCategories = async() => {
        const json = await api.getCategories();
        setCategories(json);
    }

    const verifyEditOrInset = () =>{
        if(id<0){
            return true;
        }else{
            return false;
        }
    }

    const handleProducts = (i) => {
        var p = [];
        p = ProductsPendente;
        p.push(i);
        setProductsPendente([]);
        setTimeout(()=>{
            setProductsPendente(p);
        },1)
    }

    const handleDelete = (k) => {
        var p = [];
        p = ProductsPendente;
        p.splice(k,1);
        setProductsPendente([]);
        setTimeout(()=>{
            setProductsPendente(p);
        },1)
    }

    const handleProduct = async(e) =>{
        if(e){
            const json = await api.getProducts(e.id);
            setGetProduct(json);
        }else{
            setGetProduct([]);
        }
    }

    const TotalProductPendente = () =>{
        let q = 0;
        for(let i in ProductsPendente){
            q = q + parseFloat(ProductsPendente[i].VlUnitarioTotal);
        }
        setTimeout(()=>{
            setConsumoPendente(q);
        },1)
    }

    const TotalProductRegister = () =>{
        let q = 0;
        for(let i in ProductsRegister){
            q = q + parseFloat(ProductsRegister[i].VlUnitarioTotal);
        }
        setTimeout(()=>{
            setConsumoRegister(q);
        },10)
    }

    const handleRegister = (i) => {
        setLoad(true);
        setTimeout(()=>{
            if(verifyEditOrInset()){
                let p = [];
                p = props.vendasBalcao;
                p.push(i);
                props.setVendasBalcao([]);
                props.setVendasBalcao(p);
                setProductsRegister(ProductsPendente);
                setProductsPendente([]);
                setId(p.length-1);
            }else{
                let p = [];
                p = props.vendasBalcao;
                for(let q in ProductsPendente){
                    p[id].Venda.push(ProductsPendente[q]);
                }
                p[id].VlTotal = parseFloat(p[id].VlTotal) + ConsumoPendente;
                setProductsRegister([]);
                setProductsRegister(p[id].Venda);
                props.setVendasBalcao([]);
                props.setVendasBalcao(p);
                setProductsPendente([]);
            }
            setLoad(false);
        },1000)
    }

    useEffect(()=>{
        getCategories();
    },[])

    useEffect(()=>{
        setGetProduct([]);
    },[find])

    useEffect(()=>{
        TotalProductPendente();
    },[ProductsPendente])
    
    useEffect(()=>{
       TotalProductRegister();
    },[ProductsRegister])

    useEffect(()=>{
        if (verifyEditOrInset()) {
            setIdBalcao(props.idbalcao);
            props.setIdBalcao(props.idbalcao+1)
        }else{
            setIdBalcao(props.vendasBalcao[id].id);
            setProductsRegister(props.vendasBalcao[id].Venda)
        }
    },[])

    return(
        <Container>
            <Details
                onRegister={(i)=>handleRegister(i)}
                products={ProductsPendente}
                productsRegister={ProductsRegister}
                idbalcao={idBalcao}
                consumopendente={ConsumoPendente}
                consumoregister={ConsumoRegister}
                onDelete={handleDelete}
                onClickTopo={()=>handleProduct()} 
                title="Detalhes Balcão" 
                sourceCat={<Categ categories={Categories} product={getProduct} onClickProducts={(i)=>handleProducts(i)} onClickCategorie={(e)=>handleProduct(e)}/>}
                sourceFind={<Find onClickProducts={(i)=>handleProducts(i)}/>}
                sourceCombo={<Combo />}
            />
            <LoadTela  visible={load} color="#FFF"/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        idbalcao:state.vendas.idbalcao,
        vendasBalcao:state.vendas.vendasBalcao
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setIdBalcao:(idbalcao)=>dispatch({type:'SET_IDBALCAO', payload:{idbalcao}}),
        setVendasBalcao:(vendasBalcao)=>dispatch({type:'SET_VENDASBALCAO', payload:{vendasBalcao}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCounter);