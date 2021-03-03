import styled from 'styled-components';

const ContentContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    font-size: calc(10px + 1.5vmin);
    text-align: center;
    height: ${props => props.fullView ? "100vh" : "auto"};
`;

export default ContentContainer;