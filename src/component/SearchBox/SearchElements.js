import styled from "styled-components";

export const SearchInput = styled.input`
    width:18rem;
    height: 2.1rem;
    background-color: #fff;
    color: #13141c;
    border: .5px solid #ddd;
    border-radius: 4.5px;
    font-size: 15px;
    &:focus{
        outline: none;
        box-shadow: 2px #000;
        font-size: 17px;
    }
    @media only screen and (min-width: 728px) {
    width: 30rem;
  }
`
export const Icon = styled.span`
    background-color: #fff;
    color: #13141c;
    border: .5px solid #ddd;
    font-size: 15px;
`