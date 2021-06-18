import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 400px;

    @media only screen and (max-width: 1600px){
        padding: 40px 200px 40px 200px;
    }

    >#newsTitle{
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 40px;

        
        @media only screen and (max-width: 1600px){
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0px 0px 0px 30px;
        }

        >h1{
            font-weight: 400;
            font-size: 2.2rem;
            color: ${colors.green};
        }
    }
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0px 30px;

    @media only screen and (max-width: 1600px){
        align-items: flex-start;
        justify-content: flex-start;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: ${colors.foreground};
    width: 100%;
`
export const ImageContainer = styled.div`
    >img{
        width: 370px;

        @media only screen and (max-width: 1600px){
            width: 380px;
        }
    }
`
export const ContentContainer = styled.div`
    padding: 24px 24px;
    line-height: 22px;

    >h4{
        font-size: 13px;
        font-weight: 300;
        color: ${colors.green};
        margin-bottom: 10px;
    }

    >h2{
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 500;
    }
`
export const  Footer = styled.div`
     padding: 24px 24px;
     width: 100%;
     >h2{
         font-size: 15px;
         font-weight: 300;
        color: rgba(0, 0, 0, 0.7)
     }
`

export const NewsNavigationContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    >a{
        color: rgba(0, 0, 0, 0.8);
        font-weight: 200;
        text-decoration: none;
        &:hover{
            cursor: pointer;
        }
    }
`
export const MoreButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;

    >button{
        background: ${colors.green};
        height: 40px;
        width: 120px;
        border: none;
        border-radius: 4px;

        &:hover{
            cursor: pointer;
        }
        
        color: white;
        font-weight: 300;
        color: ${colors.white};
        font-size: 16px;
        
    }
`