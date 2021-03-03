import styled from "styled-components";

const GifImg = styled.img`
    border-radius: 10px;
    border: none;
    min-width: 75vw;
    margin: 5px 15px;
    max-width: 95vw;

    @media (min-width: 768px){
        min-width: 500px;
    }
`;

export default GifImg;