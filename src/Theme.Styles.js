import React from 'react';
import { ThemeProvider } from 'styled-components';

const themeSettings = {
    colors: {
        primary: {
            superlight: "#FFF5DD",
            light: "#FFDF99",
            medium: "rgb(253, 187, 45)",
            dark: "#d4cb5b",
        },
        secondary: {
            light: "#3fe3eb",
            medium: "#35afb5",
            dark: "#267c80",
        },
        black: "#1a1a1a",
        white: "#fff",
        gray: {
            light: "",
            regular: "",
            dark: "",
        },
        opacity: {
            light: "rgba(0, 0, 0, .2)"
        }
    },
    fonts: {
        logo: "SavedByZero",
        name: "Pacifico",
        email: "Digitalis",
    },
    fontSizes: {
        small: "1.2rem",
        default: "1.6rem",
        medium: "2rem",
        large: "3rem",
        huge: "5rem",
    },
    margins: {
        small: "1rem",
        medium: "2rem",
        large: "3rem",
        huge: "4rem",
    }
};



const Theme = ({ children }) => (
    <ThemeProvider theme={themeSettings}>{children}</ThemeProvider>
);

export default Theme;