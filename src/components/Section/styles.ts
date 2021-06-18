import styled from 'styled-components';
import colors from '../../styles/colors';

type PropsContainer = {
    isAlignOnLeft?: boolean;
    image: string;
}

type PropsContent = {
    isTextDark?: boolean;
}

export const Container = styled.div<PropsContainer>`
    width: 100%;
    height: 588px;
    background: url(${props => (props.image)});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isAlignOnLeft ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const Content = styled.div<PropsContent>`
    width: 550px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 30px 0px;
    margin-top: -40px;


    >h1{
        color: ${colors.green};
        font-weight: 500;
        font-size: 44px;
        font-family: Montserrat,Sans-serif;
        margin-bottom: 20px;
    }

    >p{
        white-space: pre-line;
        width: 90%;
        margin-top: 0;
        margin-bottom: .9rem;
        margin-bottom: 20px;
        font-weight: 200;
        font-family: Sans-serif;
        color: ${props => (props.isTextDark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 1)')}
    }

    >button{
        margin-top: 20px;
        width: 142px;
        height: 40px;
        color: ${colors.white};
        border: none;
        background: ${colors.green};
        font-size: 16px;
        border-radius: 4px;
        font-weight: 300;
        &:hover{
            cursor: pointer;
        }
    }
`

export const Spacer = styled.div`
    width: 550px;
    height: 300px;
`

