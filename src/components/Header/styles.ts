import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    background: ${colors.white};
    width: 100%;
    margin-right: 13px;
    height: 86px;
    display: flex;
    min-height: 86px;
    align-items: center;
    padding: 0 390px;
    justify-content: center;
    position: fixed;

    @media only screen and (max-width: 1600px){
        padding: 0 240px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    padding: 0 10px;

    

    >a{
        &:hover{
            cursor: pointer;
        }
        >img{
            width: 195px;
    }  
    }  
`

export const Links = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 12px;

    >a{
        font-weight: 300;
        font-size: 16px;
        text-transform: uppercase;
        color: ${colors.black};
        opacity: 0.9;
        text-decoration: none;

        &:hover{
            cursor: pointer;
        }
    }
`