import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:100%;

    .topo{
        width:100%;
        height:8%;
        display:flex;
        align-items:center;
        a{
            color:#FFF;
            font-weight:bold;
            outline:0;
            text-decoration:none;
            display:flex;
            align-items:center;
            
            img{
                width:11px; 
                margin-right:10px;
            }
        }
    }

    .body{
        width:100%;
        height:92%;
        display:flex;

        .areadetail{
            width:30%;
            height:100%;
            background-color:#26262E;

            .areadetail--topo{
                height:110px;
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
                    background-color:#38AE00;
                    color:#FFF;
                }

                .areadetail--info{
                    width:75%;
                    height:35px;
                    padding:2px 5px;

                    .areadetail--fieldtopo{
                        width:100%;
                        height:35px;
                        border-bottom:0.1px solid #999;
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
    
                            img{
                                margin-right:5px;
                                width:12px;
                            }
                        }
    
                        .areadetail--fieldborder{
                            border:0.1px solid #7C7C7D;
                            border-radius:3px;
                        }
                    }

                    .areadetail--valuetotal{
                        width:100%;
                        height:30px;
                        color:#FFF;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding:15px 10px;
                        
                        label{
                            font-size:12px;
                            color:#FFF;
                        }
                    }
                }
            }
            .areaproducts{
                width:100%;
                height:50%;
                overflow: visible;
    
                .areaproducts--info{
                    width:100%;
                    height:auto;
                    padding:10px;

                    label{
                        color:#8C858B;
                        font-weight:bold;
                        font-size:14px;
                    }

                    .areaproducts--list{
                        wudth:100%;
                        height:auto;
                        box-shadow:1px 1px 2px 0.5px #000;
                        border-radius:3px;
                        padding:10px;
                        margin:5px 0px;
                        color:#FFF;
                        font-weight:bold;
                        font-size:14px;

                        .area--produts{
                            display:flex;
                            border-bottom:0.1px solid #999;
                            margin-bottom:5px;
                            
                            .area{
                                width:100%;
                                height:30px;
                                margin-bottom:15px;
                                .area--title{
                                    font-size:16px;
                                }
    
                                .area--input{
                                    
                                }
                            }
                            .area--delete{
                                cursor:pointer;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                img{
                                    width:15px;
                                }
                            }   
                        }
                    }
                }
            }
        }

        .areafind{
            width:70%;
            height:100%;
            margin-left:10px;
            .areafind--products{
                width:100%;
                height:50px;
                background-color:#292931;
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-radius:3px;
                
                div{
                    color:#FFF;
                    width:33%;
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