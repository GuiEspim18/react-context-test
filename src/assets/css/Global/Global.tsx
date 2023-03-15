import { Button, Card, Container, TextField } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, textColor1 } from "../Main/Main";

export const Global: any = createGlobalStyle`
    html, body, body>#root{
        height: 100%
    }

    html {
        background: ${primaryColor};
    }

    html, body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export const StyledContainer: any = styled(Container)`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
`;

export const StyledCard: any = styled(Card)`
    padding: 10px 34px 34px 34px;
    display: block !important;
`;

export const StyledButton: any = styled(Button)`
    height: 40px;
    width: 100%;
`;

export const InputContainer: any = styled(TextField)`
    width: 100%;
    margin-bottom: 12px !important;
`;

export const H2: any = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 3rem;
    margin: 0 !important;
    margin-bottom: 14px !important;
    color: ${textColor1};
`;