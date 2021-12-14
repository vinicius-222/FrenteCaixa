import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
    margin-top:10px;

    .topo{
        width:100%;
        height:40px;
        
        .close{
            width:32px;
            height:32px;
            display:flex;
            justify-content:center;
            align-items:center;
            border:0.1px solid #999;
            cursor:pointer;
            img{
                width:15px;
            }
        }

        .dropdown{
            height:32px;
            width:200px;
            border:0.1px solid #999;
            margin-left:5px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding-left:10px;
            color:#FFF;
            cursor:pointer;

            label{
                cursor:pointer; 
            }

            &:hover{
                background-color:#3B3B4A;
            }

            .dropdown--sub{
                position:absolute;
                width:300px;
                height:300px;
                margin-top:331px;
                margin-left:-11px;
                background-color:#32323E;
                overflow:scroll;
                padding:5px;
                border-radius:0px 0px 4px 4px;
                flex-direction:column;
                
                .dropdown--title{
                    font-size:18px;
                    font-weight:bold;
                    height:40px;
                    border-bottom:0.1px solid #EEE;
                    display:flex;
                    align-items:center;
                    padding-left:5px;
                }

                div:hover{
                    background-color:#3B3B4A;
                }
            }
        }
        .dropdown--large{
            width:300px;
            height:32px;
            border:0.1px solid #999;
            margin-left:5px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding-left:10px;
            color:#FFF;
            cursor:pointer;
            background-color:#3B3B4A;

            .area--image{
                width:32px;
                height:32px;
                display:flex;
                justify-content:center;
                align-items:center;
                border-left:0.1px solid #999;

                img{
                    width:15px;
                }
            }
        }
    }
    
    .area{
        height:50px;
        width:18.9%; 
        min-width:100px;
        background-color:#2F3039;
        margin-top:10px;
        margin-right:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        color:#FFF;
        text-align:cente;
        border-radius:3px;
        font-size:14px;
        box-shadow:1px 1px 1px 1px #000;

        &:hover{
            background-color:#3B3B4A;
        }

    }

    .areaproducts{
        height:80px;
        width:23.8%;
        min-width:100px;
        background-color:#2F3039;
        margin-top:10px;
        margin-right:10px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        cursor:pointer;
        color:#FFF;
        text-align:cente;
        border-radius:3px;
        font-size:14px;
        box-shadow:1px 1px 1px 1px #000;
        flex-direction:column;

        &:hover{
            background-color:#3B3B4A;
        }

        hr{
            width:90%;
            border:0.1px solid #999;
        }
        .areaproducts--title{
            height:35px;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .areaproducts--value{
            height:35px;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    
    .WindowArea{
        display:none;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:1;
        background-color:transparent;
        transition:all ease .5s;
        justify-content:center;
        align-items:center;
        overflow-y:auto;

        .WindowBody{
            display:block;
            position:fixed;
            flex-direction:column;
            background-color:#1F2127            ;
            width:530px;
            min-height:380px;
            height:380px;
            opacity:0;
            border-radius:3px;
            display:flex;
            transition:all ease .5s;

            .topomodal{
                width:100%;
                height:60px;
                background-color:#17181D;
                padding:8px;
                display:flex;
                flex-direction:row;
                justify-content:space-between;

                label{
                    font-size:20px;
                    color:#FFF;
                }

                .labelvalue{
                    color:#A87821;
                    font-size:20px;
                    margin-right:30px;
                }
            }

            .areaFechar{
                display:flex;
                position:absolute;
                justify-content:center;
                align-items:center;
                color:#FFF;
                width:30px;
                height:30px;
                border-radius:15px;
                cursor:pointer;
                top:0px;
                right:0px;
            }

            .bodymodal{
                width:100%;
                height:250px;

                .area--input{
                    width:100%;
                    height:60px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    
                    input{
                        height:40px;
                        width:90%;
                        outline:0;
                        border:1px solid #A87821;
                        background-color:#454955;
                        border-radius:5px;
                        color:#FFF;
                        padding:10px;
                    }
                }
            }
            .area--complemento{
                overflow:auto;
                width:100%;
                max-height:190px;
            }
            
            .clear{
                height:100%;
                width:100%;
            }

            .footermodal{
                height:70px;
                min-height:70px;
                width:100%;
                background-color:#17181D;
                display:flex;
                align-items:center;
                padding:15px;
                
                .inputObs{
                    outline:0;
                    height:35px;
                    width:200px;
                    background-color:#454955;
                    border-radius:4px;
                    border:0px;
                    padding:5px;
                    color:#FFF;
                }
            }
        }
    }
`;