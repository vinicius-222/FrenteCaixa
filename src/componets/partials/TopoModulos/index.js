import React, { useState } from 'react';
import { Container } from './styled';
import Lupa from '../../../assets/images/Lupa.png'
import Cifra from '../../../assets/images/Cifra.png'
import Clock from '../../../assets/images/Clock.png'
import People from '../../../assets/images/People.png'
import { connect } from 'react-redux';

const TopoModulos = (props) => {
    const [filtro, setFiltro] = useState('C');

    const Click = (e) => {
        props.onClick(e);
    }

    return(
        <Container>
            <div className="area">
                <div className={props.stbody === 'B' ? "area--button area-left buttonativo":'area--button area-left'} onClick={()=>Click('B')}>
                    <label>Balcão</label>
                </div>
                <div className={props.stbody === 'C' ? "area--button buttonativo":'area--button'} onClick={()=>Click('C')}>
                    <label>Comandas</label>
                </div>
                <div className={props.stbody === 'D' ? "area--button buttonativo":'area--button'} onClick={()=>Click('D')}>
                    <label>Delivery</label>
                </div>
                <div className={props.stbody === 'M' ? "area--button buttonativo":'area--button'} onClick={()=>Click('M')}>
                    <label>Mesas</label>
                </div>
            </div>
            <div className="areafiltros">
                <div className="areafiltros--item">
                    <label>filtrar por</label>
                    <div className="areafiltros--button">
                        Status
                    </div>
                    <div className="areafiltros--button area--buttonitem">
                        <div className={filtro === 'C' ? 'ativo':''} onClick={()=>setFiltro('C')}>
                            <img src={Cifra}/>
                        </div>
                        <div className={filtro === 'O' ? 'ativo':''} onClick={()=>setFiltro('O')}>
                            <img src={Clock}/>
                        </div>
                        <div className={filtro === 'P' ? 'ativo':''} onClick={()=>setFiltro('P')}>
                            <img src={People}/>
                        </div>
                    </div>
                </div>
                <div className="areafiltros--input">
                   <input 
                        placeholder="BUSCAR PEDIDO"
                   />
                    <img src={Lupa}/>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        stbody:state.system.stbody,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setStbody:(stbody)=>dispatch({type:'SET_STBODY', payload:{stbody}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopoModulos);