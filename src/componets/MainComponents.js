import styled from 'styled-components';

export const Template = styled.div`
    display:flex;
    flex-direction:column;
    height:92%;
    padding:10px 30px;

`;

export const Container = styled.div`
    padding:10px 30px;
    width:100%;
    background-color:#F9F9F9;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
`;

export const AreaTopo = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    div{
        display:flex;
    }
`;

export const AreaFiltros = styled.div`
    display:flex;
    justify-content:${props=>props.justify ||'space-between'};
    align-items:${props=>props.align || 'center'};
    margin-top:15px;
    background-color:#FFF;
    width:100%;
    height:${props=>props.height || 120}px;
    border-radius:5px;
    border:1px solid #CCC;
    padding:20px;
`;

export const AreaFiltrosCampos = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    width:90%;
    height:${props=>props.height || 170}px;
    justify-content:flex-start;
    align-items:flex-start;
    padding:0px ${props=>props.peddingheight || 20}px;

    p{
        color:#0B3F64;
    }
`;

export const AreaFiltrosButton = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
    width:20%;
    height:80px;
    margin-left:10px;
`;

export const SubTemplate = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`;

export const Body = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`;

export const PageContainer = styled.div`
    width:100%;
    margin:0px;
`;

export const PageTitle = styled.h1`
    font-size:27px;
`;

export const PageBody = styled.div`
    display:flex;
    height:auto;
`;

export const ErrorMessage = styled.div`
    margin:10px 0px;
    background-color:#FFCACA;
    color:#000;
    border:2px solid #FF0000;
    padding:10px;
`;


export const SucessoMessage = styled.div`
    margin:10px 0px;
    background-color:#98FB98;
    color:#000;
    border:2px solid #008B45;
    padding:10px;
`;

export const Warning = styled.div`
    margin-left:25px;
    margin-top:30px;
    display:flex;
    align-items:center;
    background-color:#D1E5EF;
    width:95%;
    height:60px;
    padding:20px;
    color:#0080B1;
    border-radius:5px;
    border:0.5px solid #0080B1;
`;

export const Select = styled.select`
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
    -moz-appearance: none; /* Remove estilo padrão do FireFox */
    appearance: none; /* Remove estilo padrão do FireFox*/
    background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #FFF;  /* Imagem de fundo (Seta) */
    background-position:right center;  /*Posição da imagem do background*/
    width:${props=>props.width || 90}%; /* Tamanho do select, maior que o tamanho da div "div-select" */
    height:29px; /* Altura do select, importante para que tenha a mesma altura em todo os navegadores */
    border:1px solid #999;
    padding:0px ${props=>props.paddingheight || 10}px
    color:#838B8B;
    font-size:18px;
    outline:0px;
    margin:${props=>props.borderWidth || 0}px ${props=>props.borderHeigth || 0}px;
    option{
        
    }
`;

export const Line = styled.hr`
    width:${props=>props.width || 100}%;
`;

export const SubTitle = styled.h2`
    color:#163F5F;
`;


export const ButtonPadrao = styled.button`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    background-color:${props=>props.backgroundcolor || '#000E2D'};
    height:${props=>props.height || 40}px;
    width:${props=>props.width || 120}px;
    border-radius:5px;
    outline:0;
    margin:${props=>props.margin || 5}px;
    color:${props=>props.color || '#FFF'};;
    transition:all ease 0.6s;
    border:0.5px solid ${props=>props.bordercolor || 'transparent'};

    &:hover{
        transition:all ease 1s;
        background-color:${props=>props.backgroundhover || '#005E8A'};
    }
`;

export const ButtonOption = styled.div`
    background-color:${props=>props.backgroundcolor || '#6A6A6A'};
    height:${props=>props.height || 30}px;
    display:flex;
    margin:${props=>props.marginWidth || 5}px ${props=>props.marginHeigth || 5}px;
    margin-top:${props=>props.marginTop || 0}px;
    margin-bottom:${props=>props.marginBottom || 0}px;
    width:${props=>props.height || 140}px;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    color:${props=>props.color || '#FFF'};;
    border-radius:5px;
    transition:all ease 0.8s;
`;