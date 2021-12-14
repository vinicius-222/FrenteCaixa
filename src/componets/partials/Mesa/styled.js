import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:auto;
    padding:5px;
    background-color:#26262E;
    display:flex;
    flex-wrap:wrap;
    justify-content:initial;
    box-shadow:2px 1px 3px #000;
    
    .area{
        display:flex;
        min-width:100px;
        width:15.2%;
        background-color:#363A46;
        margin:10px;
        height:70px;
        border-radius:4px;
        cursor:pointer;
        text-decoration:none;

        .area--numero{
            height:70px;
            width:100px;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#EEE;
            font-size:20px;
            font-weight:bold;
            background-color:#292B35;
            border-radius:4px 0px 0px 4px;
        }

        .area--title{
            display:flex;
            justify-content:center;
            align-items:center;
            color:#EEE;
            font-size:20px;
            font-weight:bold;
            width:100%;
            height:100%;
        }

        .area--numerogreen{
            background-color:#00BF00;
        }
    }

    .area--green{
        background-color:#006B00;
    }
`;