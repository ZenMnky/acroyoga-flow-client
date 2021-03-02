import styled from 'styled-components';

const AcroFlowElementsList = styled.ul`
    list-style: none;
    padding-left: 0;

    li {
        display: flex;
        align-items: center;
        border: solid 2px #d0d0d0;
        border-radius: .2em;
        padding: .5em .8em .5em .5em;
        margin-bottom: 1em;
    }

    p {
        max-width: none;
        font-weight: bold;
        margin: 0;
    }
`;

export default AcroFlowElementsList;