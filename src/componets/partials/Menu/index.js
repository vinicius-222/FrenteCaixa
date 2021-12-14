import React,{useEffect} from 'react';
import { Container } from './styled';
import { connect } from 'react-redux';
 
const Menu = (props) => {
    useEffect(()=>{
        if (props.StMenu){
            setTimeout(()=>{
                document.querySelector('.Teste').style.width = '300px';
            },200)
        }else{
            document.querySelector('.Teste').style.width = '0px';
        }
        
    },[props.StMenu])
    return(
        <Container className={props.StMenu ? "open": ""}>
            <aside className={props.StMenu ? "Teste open": "Teste"}>

            </aside>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        nome:state.user.nome,
        StMenu:state.user.StMenu
    }
}


export default connect(mapStateToProps)(Menu);