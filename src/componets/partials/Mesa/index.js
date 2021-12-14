import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Container } from './styled';

const Mesa = (props) => {

    return(
        <Container>
            {props.mesas &&
                props.mesas.map((i,k)=>
                    <Link onClick={()=>props.setIndexVendasMesas(k)} key={k} className={i.VlTotal > 0?"area area--green":"area"} to={`/DetailsTable?id=${i.id}`}>
                        <div className={i.VlTotal > 0 ?"area--numero area--numerogreen":"area--numero"}>{i.id}</div>
                        <div className="area--title">{i.VlTotal > 0 ?`R$ ${i.VlTotal.toFixed(2).replace(".",",")}`:"Mesa Livre"}</div>
                    </Link>
                )
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        indexvendasMesas:state.vendas.indexvendasMesas
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setIndexVendasMesas:(indexvendasMesas)=>dispatch({type:'SET_INDEXVENDASMESAS', payload:{indexvendasMesas}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Mesa); 