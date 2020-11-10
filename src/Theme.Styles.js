import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        green: {
            primary: "#4feb34",
            secondary: "#4fc73a",
            tertiary: "#348026",
        },
        blue: {
            primary: "#3fe3eb",
            secondary: "#35afb5",
            tertiary: "#267c80",
        }
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        default: "1.6rem",
        medium: "2rem",
        large: "3rem",
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;