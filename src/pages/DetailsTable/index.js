import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import SalatoAPI from '../../Helpers/SalatoAPI';
import Categ from '../../componets/partials/Categories';
import Find from '../../componets/partials/Find';
import Combo from '../../componets/partials/Combo';
import Details from '../../componets/partials/Details';
import { useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import {LoadTela} from '../../componets/Loading';

const DetailsTable = (props) => {
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
    const [ProductsRegister, setProductsRegister] = useState([]);
    const [idBalcao, setIdBalcao] = useState(0);
    const [mesa, setMesa] = useState(query.get('id') !== null ? query.get('id'):'');
    const [load, setLoad] = useState(false);
    const [id, setId] = useState(props.indexvendasMesas);
    
   
    const getCategories = async() => {
        const json = await api.getCategories();
        setCategories(json);
    }

    const handleProduct = async(e) =>{
        if(e){
            const json = await api.getProducts(e.id);
            setGetProduct(json);
        }else{
            setGetProduct([]);
        }
    }

    const verifyEditOrInset = () =>{
        if(id<0){
            return true;
        }else{
            return false;
        }
    }

    const handleRegister = (i) => {
        setLoad(true);
        setTimeout(()=>{
            if(verifyEditOrInset()){
                let p = [];
                p = props.vendasMesa;
                p.push(i);
                props.setVendasMesa([]);
                props.setVendasMesa(p);
                setProductsRegister(ProductsPendente);
                setProductsPendente([]);
            }else{
                let p = [];
                p = props.vendasMesa;
                for(let q in ProductsPendente){
                    p[id].Venda.push(ProductsPendente[q]);
                }
                p[id].VlTotal = parseFloat(p[id].VlTotal) + ConsumoPendente;
                setProductsRegister([]);
                setProductsRegister(p[id].Venda);
                props.setVendasMesa([]);
                setTimeout(()=>{
                    props.setVendasMesa(p);
                },1)
                setProductsPendente([]);
            }
            setLoad(false);
        },1000)
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

    const handleProducts = (i) => {
        var p = [];
        p = ProductsPendente;
        p.push(i);
        setProductsPendente([]);
        setTimeout(()=>{
            setProductsPendente(p);
        },1)
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

    useEffect(()=>{
        getCategories();
        setProductsRegister(props.vendasMesa[props.indexvendasMesas].Venda ?props.vendasMesa[props.indexvendasMesas].Venda :[])
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

    return(
        <Container>
            <Details
                id={mesa}
                consumopendente={ConsumoPendente}
                onDelete={handleDelete}
                onRegister={(i)=>handleRegister(i)}
                productsRegister={ProductsRegister}
                idbalcao={idBalcao}
                consumoregister={ConsumoRegister}
                products={ProductsPendente}
                onClickTopo={()=>handleProduct()} 
                title="Detalhes da Mesa" 
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
        vendasMesa:state.vendas.vendasMesa,
        indexvendasMesas:state.vendas.indexvendasMesas
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setIdBalcao:(idbalcao)=>dispatch({type:'SET_IDBALCAO', payload:{idbalcao}}),
        setVendasMesa:(vendasMesa)=>dispatch({type:'SET_VENDASMESA', payload:{vendasMesa}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);