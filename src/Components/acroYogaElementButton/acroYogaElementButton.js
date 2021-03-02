
import styled from 'styled-components'

const AcroYogaElementButton = styled.button`
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 4px;

    :hover {
        cursor: pointer;
    }

    :first-child {
        margin-left: 0;
    }

    :last-child {
        margin-right: 0;
    }
`;

export default AcroYogaElementButton;