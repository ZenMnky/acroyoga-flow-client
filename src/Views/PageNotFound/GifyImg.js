import styled from "styled-components";

const GifImg = styled.img`
    border-radius: 10px;
    border: none;
    min-width: 25vw;

    @media (min-width: 700px){
        min-width: 500px;
    }
`;

export default GifImg;