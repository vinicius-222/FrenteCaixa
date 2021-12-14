import styled from 'styled-components';

export const Container = styled.div`
    display:inline-block;
    pisition:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#FFF;

    
    aside{
        width:300px;
        position:absolute;
        height:700px;
        transition:all ease .2s;
        background-color:#1E1E1E;
        overflow: auto;
        margin-left:-29px;
        margin-top:-10px;
    }

    .open{
        display:block;
        margin-left:-29px;
        margin-top:-10px;
    }
`;