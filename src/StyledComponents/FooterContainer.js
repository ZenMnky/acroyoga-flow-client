import styled from 'styled-components';

const FooterContainer = styled.footer`
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 1.5vmin);
    text-align: center;

    a {
        text-decoration: none;
    }

    a:visited {
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export default FooterContainer;
