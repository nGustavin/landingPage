import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
`

export const SectionContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 86px;
`

export const Newsletter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 80px 80px 0px;
    gap: 100px;
`
export const Info = styled.div`
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    >h1{
        font-weight: 400;
        font-size: 2rem;
    }

    >p{
        font-weight: 300;
        color: rgba(0, 0 , 0, 0.7);
        font-size: 18px;
    }
`
export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    >input {
        height: 40px;
        width: 210px;
        padding: 0 15px;
        

        &::placeholder{
            font-size: 15px;
        }

        &:active{
            outline: none;
            border: solid 1px rgba(0, 0, 0, 0.7);
        }
    }

    >button{
        height: 40px;
        background: ${colors.green};
        width: 150px;
        border: none;
        border-radius: 4px;

        color: ${colors.white};
        font-size: 14px;
        font-weight: 400;
        &:hover{
            cursor: pointer;
        }
    }

    
`


