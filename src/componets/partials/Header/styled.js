import styled from 'styled-components';

export const Container = styled.div`
    height:60px;
    width:100%;
    background-color:#3B3B3B;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction-row;

    .area--Menu{
        width:100px;
        height:60px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding:10px;
        cursor:pointer;

        img{
            width:30px;
            cursor:pointer;
        }

    }

    .area--logo{
        width:70px;
        height:60px;
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            width:70px;
    
        }

    }

    .area--buttons{
        width:130px;
        height:60px;
        display:flex;
        justify-content:center;
        align-items:center;

        div{
            padding:5px;
            img{
                width:25px;
                cursor:pointer;
            }
        }
    }
`;