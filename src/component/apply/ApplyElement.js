import styled from 'styled-components'
export const Applys = styled.div`
    display: flex;
    width: 70rem;
    background-color: #18191f;
    height: 100%;
    margin: auto;
    margin-top: 30px;
    border-radius: 5px;
    @media only screen and (max-width: 728px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        
    
    }
`
export const Announce = styled.div`
    width: 35%;
    height: 30rem;
    padding: 10px;
    border-radius: 10px;
    margin:auto;
    background-color: #e01067;
    @media only screen and (max-width: 728px) {
        margin-left: 50px;
        height: auto;
    
    }
`
export const FormDiv = styled.div`
    width: 55%;
    height:auto;
    padding: 5px;
    border-radius: 10px;
    margin: 20px;
    background-color: #06041c;
    @media only screen and (max-width: 728px) {
        width: 40%;
    
    }
`
export const InputBox = styled.div`
    padding: 10px;
    margin: 15px;
`
export const InputHeader = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: white;
    margin-bottom: 5px;
`
export const Input = styled.input`
    font-size: 15px;
    font-weight: 300;
    color:#06041c ;
    border: 3px solid yellow;
    width: 40%;
    border-radius: 5px;
    &:focus{
        outline: none;
    }
    @media only screen and (max-width: 728px) {
        width: 20rem;
    
    }
`
export const InputSubmitButton = styled.button`
    background-color: aqua;
    border: 1px solid red;
    font-weight: 500;
    font-size: 20px;
    outline: none;
    width: 150px;
    padding: 5px;
    border-radius: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    cursor: pointer;
`
export const AnnounceMsg = styled.div`
    font-size: 25px;
    letter-spacing: 1.5px;
    font-weight: 400;
    color: white;
    font-family:'Times New Roman', Times, serif;
    margin-top:150px;
    margin-left: 50px;
    @media only screen and (max-width: 728px) {
        margin: 0;
    }
`