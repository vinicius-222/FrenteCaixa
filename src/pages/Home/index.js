import React, {useState} from 'react';
import { Container } from './styled';
import TopoModulos from '../../componets/partials/TopoModulos';
import Mesa from '../../componets/partials/Mesa';
import Counter from '../../componets/partials/Counter';
import { connect } from 'react-redux';

const Home = (props) => {
    
    return(
        <Container>
            <TopoModulos onClick={(e)=>props.setStbody(e)} /> 
            {props.stbody === 'M' && <Mesa mesas={props.vendasMesa}/>}
            {props.stbody === 'B' && <Counter clientes={props.vendasBalcao}/>}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        stbody:state.system.stbody,
        vendasBalcao:state.vendas.vendasBalcao,
        vendasMesa:state.vendas.vendasMesa
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setStbody:(stbody)=>dispatch({type:'SET_STBODY', payload:{stbody}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);