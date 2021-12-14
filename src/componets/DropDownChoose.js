import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:30px;
    border:0.5px solid #CCC;
    background-color:#FFF;
    border-radius:5px;
    padding:3px 10px;
    color:#0B3F64;
    background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #FFF;  /* Imagem de fundo (Seta) */
    background-position:right center;  /*Posição da imagem do background*/
`;

const SubMenu = styled.div`
    display:none;
    width:100%;
    position:relative;
    height:auto;
    border:0.5px solid #CCC;
    background-color:#EEE;
    border-radius:5px;
    padding:3px;
    flex-direction:column;

    .areaItens{
        display:flex;
        flex-direction:row;
        width:100%;
        height:auto;
        align-items:center;
        padding:0px 10px;
        z-index:10;
        
        div{
            color:#0B3F64;
        }

        .areaCheck{
            width:13px;
            height:13px;
            background-color:#CCC;
            border-radius:3px;
            margin-right:5px;
            cursor:pointer;
            transition:all ease 0.8s;
        }

        .areaCheckOk{
            background-color:#0D0342;
            transition:all ease 0.8s;
        }
    }
`;
const DropDownChoose = (props) => {
    const [QtCheck, setQtCheck] = useState(0);
    const [stOpemMenu, setStOpemMenu] = useState(false);
    const [list, setList] = useState([]);
    const [Nome, setNome] = useState('');

    const handleCheck = (k) => {
        let lList = [];
        lList = list;
        lList[k].Status = !lList[k].Status;

        setTimeout(()=> {
            setList([]);
            setList(lList);
        },1)
    }

    const handleAllSelect = ()=>{
        if(QtCheck == list.length -1){
            let lList = [];
            lList = list;
            let key = lList.findIndex((item) =>item.Nome == "[Todos]");
            lList[key].Status = !lList[key].Status;
            
            if(QtCheck == lList.length -1){
                setNome('[Todos]');
            }
            setTimeout(()=> {
                setList([]);
                setList(lList);
            },1)
        }
    }

    const handleSelectAll = (i,k) => {
        let lList = [];
        lList = list;
        lList[k].Status = !lList[k].Status;
        
        if(lList[k].Status){
            for(let i in lList){
                lList[i].Status = true;
            }
        }else{
            for(let i in lList){
                lList[i].Status = false;
            }
        }
        if(i.Nome === "[Todos]"){
            setNome('[Todos]');
        }
        
        setTimeout(()=> {
            setList([]);
            setList(lList);
        },10)
    }
    
    const Counters =() => {
        let q = 0;
        for(let i in list){
            if(list[i].Status == true){q++;}
        }
        if(q == 1){
            let key = list.findIndex((item) =>item.Status == true);
            setNome(list[key].Nome)
        }
        setQtCheck(q);
    }

    useEffect(()=>{
        let lList = [];
        lList = list;
        setTimeout(()=> {
            setList([]);
            setList(lList);
        },10)
    },[])

    useEffect(()=>{
        Counters();
    },[list])

    useEffect(()=>{
        handleAllSelect();
    },[QtCheck])

    useEffect(()=>{
        let lList = [];
        lList = props.list;
        props.stTodos && lList.unshift({"Nome":"[Todos]", "Status":false});

        setTimeout(()=>{
            setList([])
            setList(lList);
        },100)
    },[props.list])

    return(
        <>
            <Container onClick={()=>setStOpemMenu(!stOpemMenu)}>
                {QtCheck == 1 || QtCheck == list.length ? Nome : QtCheck + " de "+ list.length+" Selecionados"}
            </Container>
            <SubMenu style={{display:stOpemMenu ? "block":"none"}}>
            {list.map((i,k)=>
                <div key={k} className="areaItens">
                    <div className={i.Status ? "areaCheck areaCheckOk":"areaCheck"} onClick={()=>i.Nome !=="[Todos]" ?handleCheck(k): handleSelectAll(i,k)}></div>
                    <div>{i.Nome}</div>
                </div>
            )}
        </SubMenu>
    </>
    )
}

export default DropDownChoose;