import React, { useState, useEffect } from 'react';
import { Container, Clear, Footer } from './styled';
import Add from '../../../assets/images/Add+.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Counter = (props) => {

    return(
        <>
            <Container>
                {props.clientes.length <= 0 ? <div className="info">Não há informações para exibir!</div>:''}
                {props.clientes && 
                    props.clientes.map((i,k)=>
                    <Link onClick={()=>{
                            props.setVendasMesas([]);
                            props.setIndexVendasMesas(k)
                        }} key={k} className="area" to={`/DetailsCounter?id=${k}`}>
                        <div className="area--numero">{i.id}</div>
                        <div className="area--title">{`R$ ${i.VlTotal.toFixed(2).replace(".",",")}`}</div>
                    </Link>
                    )
                }
            </Container>
            <Clear className="clear"></Clear>
            <Footer>
                <Link to="/DetailsCounter">
                    <img src={Add}/>
                </Link>
            </Footer>
         </>
    )
}

const mapStateToProps = (state) => {
    return{
        indexvendasMesas:state.vendas.indexvendasMesas
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setIndexVendasMesas:(indexvendasMesas)=>dispatch({type:'SET_INDEXVENDASMESAS', payload:{indexvendasMesas}}),
        setVendasMesas:(vendasMesa)=>dispatch({type:'SET_VENDASMESA', payload:{vendasMesa}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);