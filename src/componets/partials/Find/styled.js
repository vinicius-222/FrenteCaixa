import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:100%;

    .areainput{
        margin-top:10px;
        height:8%;
        display:flex;

        input{
            width:100%;
            outline:0;
            background-color:#707082;
            border:1px solid #F7AB00;
            border-radius:5px;
            color:#FFF;
            font-size:18px;
            padding:10px;
        }
    }
    
    .areatp{
        width:100%;
        height:8%;
        display:flex;
        align-items:center;

        label{
            color:#FFF;
        }
    }

    .arearesult{
        width:100%;
        height:auto;
        max-height:400px;
        overflow:scroll;

        .arearesult--item{
            width:100%;
            height:50px;
            border-bottom:0.1px solid #EEE;
            align-items:center;
            display:flex;
            justify-content:space-between;
            &:hover{
                background-color:#707082;
            }

            .arearesult--title{
                width:33%;
                display:flex;
                display:flex;
                flex-direction:column;
                padding:5px;

                label{
                    color:#FFF;
                }

                .labelid{
                    color:#999;
                    font-size:14px;
                }
            }
            .arearesult--price{
                width:33%;

                label{
                    color:#FFF;
                }
            }

            .arearesult--button{
                padding-right:10px;
            }
        }
    }

    .areaclear{
        width:100%;
        height:84%;
    }
`;