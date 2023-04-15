import styled from "styled-components";

export const HBox = styled.div`
    width: 16px;
`

export const VBox = styled.div`
    height: 16px;

    @media screen and (max-width: 800px) {
        &{
            height: 8px;
        }
    }
`