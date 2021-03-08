import styled from 'styled-components';

const ContentContainer = styled.article`
    flex: 1 0 auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    font-size: calc(10px + 1.5vmin);
    text-align: center;
    min-height: ${(props) => (props.fullView ? '100vh' : 'auto')};

    img {
        width: 100%;
        height: auto;
        max-width: 80vw;
    }

    @media (min-width: 768px){
        img {
            max-height: 50vh;
            width: auto;
        }
    }
`;

export default ContentContainer;
