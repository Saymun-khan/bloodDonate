import styled from 'styled-components'

export const BloodDonarCard = styled.div`
                height: auto;
                width: 350px;
                border: 2px solid black;
                background-image: linear-gradient(rgb(29, 27, 27), rgb(15, 15, 15));
                border-radius: 5px;
                color: white;
                margin:25px;
                padding: 10px;
`
export const BloodDonarCardImage = styled.div`
            height: 160px;
            width: 160px;
            border-radius: 50%;
            background-color: #1c1d2b;
            margin: auto;
            margin-top: 25px;
`
export const BloodDonarGroup = styled.div`
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: brown;
            border: 4px solid yellow;
            margin-top:15px;
            margin-left:13rem;

`
export const BloodDonarCardText = styled.h1`
            font-size: 30px;
            font-weight: 400;
            padding: 5px;
            margin-top: 10px;
            text-transform: capitalize;
            margin-top: 6.5rem;
`
export const BloodDonarCardExpandText = styled.h3`
            font-size: 18px;
            margin-left: 5px;
            font-weight: 300;
            margin-left: 10px;
            margin-top: 15px;
            margin-bottom: 1rem;
            margin-top: 10px;
`
export const BloodDonarProfile = styled.div`
            display: flex;
            margin-bottom: 15px;
            margin-top:-30px;
            margin-left: -50px;
`
export const BloodDonarCardBox = styled.div`
            width: 150px;
            height: auto;
            border: 3px solid rgb(255, 255, 51);
            padding:10px;
            margin: auto;
            font-size: 15px;
            font-weight: 300;
            margin-top: 10px;
            text-align:center;
            margin-left: 5px;

        &:hover{
            color:yellow;
            border: 3px solid red;
        }
`

