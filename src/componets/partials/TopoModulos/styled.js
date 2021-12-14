import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:150px;
    min-height:150px;
    flex-direction:row;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;

    .area{
        flex-direction:row;
        display:flex;

        .area--button{
            width:120px;
            height:50px;
            display:flex;
            justify-content:flex-end;
            align-items:center;
            background-color:#2F3039;
            flex-direction:column;
            margin:10px;
            color:#CCC;
            border-radius:5px;
            cursor:pointer;
            box-shadow:2px 2px 5px #000;
            font-weight: bold;

            label{
                margin-bottom:13px;
            }
        }

        .inativo{
            display:none;
        }
        .area-left{
            margin-left:0px;
        }

        .buttonativo{
            border-bottom:2px solid #B98919;
        }

        .area--buttonfooter{
            height:3px;
            width:100%;
            background-color:#B98919;
            border-radius:0px 0px 5px 5px;
        }
    }

    .areafiltros{
        display:flex;
        flex-direction:column;
        width:300px;
        .areafiltros--item{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin:15px 0px;
            
            label{
                color:#EEE;
                padding:0px 10px;
                font-weight: bold;
            }

            .areafiltros--button{
                width:90px;
                height:35px;
                border-radius:5px;
                background-color:#6A6A6A;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#EEE;
                .ativo{
                    background-color:#3B3C49;
                }
            }

            .area--buttonitem{
                background-color:#2F3039;
                display:flex;
                align-items:center;
                justify-content:space-between;

                div{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                    width:30px;
                    height:100%;
                    border-radius:5px;
                    img{
                        height:15px;
                    }
                }
            }
        }
        .areafiltros--input{
            background-color:#2F3039;
            padding:0px 10px;
            width:300px;
            height:30px;
            border-radius:15px;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:row;

            input{
                background-color:#2F3039;
                text-decoration:none;
                outline:0;
                border:0;
                color:#EEE;
                width:100%;
            }
            img{
                width:15px;
                height:15px;
                margin-left:10px;
                cursor:pointer;
            }
        }
    }
`;