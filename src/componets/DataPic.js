import React from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";

const AreaPicker = styled.div`
    display:flex;
    width:100%;
    .react-datepicker-wrapper{
        width:100%;
    }

    input{
        color:#000;
        background: url(https://salato.com.br/backEndSalato/Images/ico-seta-appearance.gif) no-repeat #FFF;
        background-position: 100% center;  /*Posição da imagem do background*/
        height:29px;
        width:100%;
        border-radius:3px;
        autline:0;
        border:1px solid #999;
        font-size:14px;
        padding:0px 5px;
        outline:0;

        transition:ease all 0.5s;
        &:hover {
            border:1px solid #0000CD;
        }
        &:focus{
            border:1px solid #0000CD;
        }

    }
`;
const DataPic = (props) => {
    return(
        <AreaPicker>
            <DatePicker 
                selected={props.selected}
                onChange={props.onChange}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                dateFormat="dd/MM/yyyy"
            />
        </AreaPicker>
    )
}

export default DataPic;