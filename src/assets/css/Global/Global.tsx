import { Button, Card, Container } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

export const Global: any = createGlobalStyle`
    body {
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

export const StyledContainer: any =  styled(Container)`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
`;

export const StyledCard: any = styled(Card)`
    padding: 34px;
    display: block !important;
`;

export const StyledButton: any = styled(Button)`
    height: 40px;
    width: 100%;
`;