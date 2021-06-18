import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: ${colors.foreground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 370px 20px 370px; 
    gap: 20px;

    @media only screen and (max-width: 1600px){
        padding: 0px 200px 20px 200px;
    }

    >div{
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 35px;

        
    }  
`;


export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 50px 0px 30px 0px;
    margin-top: 30px;

    >h1{
        font-weight: 400;
        font-size: 2.2rem;
        color: ${colors.green};
    }
`