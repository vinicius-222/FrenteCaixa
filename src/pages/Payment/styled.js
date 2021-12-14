import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;

    .body{
        width:100%;
        height:92%;
        display:flex;

        .areadetail{
            width:40%;
            height:100%;
            background-color:#26262E;

            .areadetail--topo{
                height:80px;
                width:100%;
                background-color:#2F3039;
                box-shadow:1px 1px 2px 1px #000;
                border-radius:2px;
                display:flex;

                .areadetail-number{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:25%;
                    height:100%;
                    border-radius:2px;
                    font-size:28px;
                    font-weight:bold;
                    background-color:#E08800;
                    color:#FFF;
                }

                .areadetail--info{
                    width:75%;
                    height:100%;
                    padding:2px 5px;

                    .areadetail--fieldtopo{
                        width:100%;
                        height:100%;
                        box-sizing:border-box;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;

                        .areadetail--field{
                            height:25px;
                            width:28%;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            color:#FFF;
                            font-size:12px;
                            font-weight:bold;
                            background-color:#2F323D;
    
                            img{
                                margin-right:5px;
                                width:18px;
                            }
                        }
    
                    }
                }
            }
            .areacheck{
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin:5px 0px;
                label{
                    color:#FFF;
                    margin-right:20px;
                }
            }
            
            .area{
                display:flex;
                height:30px;
                justify-content:space-between;
                align-items:center;
                margin:15px 0px;

                .area--title{
                    color:#706D6F;
                    margin-left:35px;
                }

                .area--price{
                    color:#706D6F;
                    margin-right:20px;
                }

                .area--total{
                    color:#EB8600;
                }

                .area--restante{
                    color:#E9233D;
                }

                .area--troco{
                    color:#3F86B0;
                }
            }
        }

        .areainfo{
            width:100%;
            height:50%;
            overflow: visible;
            padding-left:20px;

            .areainfo--dados{
                width:100%;
                height:50px;
                background-color:#292931;
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-radius:3px;
                
                div{
                    color:#FFF;
                    width:50%;
                    height:100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    font-weight:bold;
                    font-size:14px;
                    cursor:pointer;
                    border-radius:3px;
                }

                .ativo{
                    background-color:#3B3C49;
                    height:100%;
                    cursor:pointer;
                    border-radius:3px;
                }
            }
            .areainfo--pagamentos{
                width:100%;
                height:90px;
                padding:10px 0px;

                label{
                    color:#7B766C;
                }

                .areainfo--dadospagamento{
                    display:flex;
                    width:100%;
                    margin-top:10px;

                    .areaCPFCNPJ{
                        width:35%;
                        height:40px;
                        background-color:#444955;
                        border:0px;
                        border-radius:3px;
                        padding:5px;
                        margin:0px 10px;
                        font-size:16px;
                        color:#FFF;
                        outline:0;
                    }

                    .areaValue{
                        width:15%;
                        height:40px;
                        background-color:#444955;
                        border:0px;
                        border-radius:3px;
                        padding:5px;
                        outline:0;
                        font-size:16px;
                        color:#FFF;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }

                    .areabutton{
                        width:15%;
                        height:40px;
                        background-image: linear-gradient(to bottom, #219DC3, #0E6094 100%);
                        border-radius:3px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        margin-left:10px;
                        cursor:pointer;

                        label{
                            color:#FFF;
                            cursor:pointer;
                        }
                    }
                }
            }

            .areainfo--listapagamentos{
                width:100%;
                height:auto;

                .area--lista{
                    width:100%;
                    height:40px;
                    background-color:#2E3239;
                    border-radius:3px;
                    box-shadow:1px 0px 0px 1px #26252F; 
                    margin:10px 0px;
                    display:flex;
                    padding:0px 10px;
                    justify-content:space-between;
                    align-items:center;

                    label{
                        color:#FFF;
                        width:200px;
                    }

                    div{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        cursor:pointer;
                        img{
                            width:13px;
                        }
                    }
                }
            }
            
            .areaproducts{
                width:100%;
                height:auto;
                background-color:#26252F;

                .areaproducts--list{
                    margin:10px 0px;
                    border-bottom:0.1px solid #999;
                    padding:0px 10px;
                    .areaproducts--title{
                        color:#FFF;
                        font-size:18px;
                    }
    
                    .areaproducts--dados{
                        color:#999;
                        font-size:14px;
                    }
                }
            }
        }
    }

    .areafooter{
        position:fixed;
        bottom:0px;
        left:0px;
        right:0px;
        background-color:#000;
        display:flex;

        img{
            width:55px;
            cursor:pointer;
            margin:10px;

        }
    }
`;