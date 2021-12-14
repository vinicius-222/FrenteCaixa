import React from 'react';
import { Container } from './styled';
import Logo from '../../../assets/images/Logo.png';
import Menu from '../../../assets/images/Menu.png'
import Chat from '../../../assets/images/Chat.png'
import Notificacao from '../../../assets/images/Notificacao.png'
import Money from '../../../assets/images/Money.png'
import { connect } from 'react-redux';

const Header = (props) => {
    return(
        <Container>
            <div className="area--Menu" onClick={()=>props.setStMenu(!props.StMenu)}>
                <img src={Menu}/>
            </div>
            <div className="area--logo">
                <img src={Logo} />
            </div>
            <div className="area--buttons">
                <div>
                    <img src={Chat}/>
                </div>
                <div>
                    <img src={Notificacao}/>
                </div>
                <div>
                    <img src={Money}/>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        StMenu:state.user.StMenu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setStMenu:(StMenu)=>dispatch({type:"SET_STMENU", payload:{StMenu}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);