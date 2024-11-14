import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4f7fae",
    },
    secondary: {
      main: "#515151db",
    },
    warning: {
      main: "#f9c851",
    },
    error: {
      main: "#ff5b5b",
    },
    info: {
      main: "#fbf4f452",
    },
    success: {
      main: "#10c469",
    },
    common: {
      black: "#343a40",
    },
    background: {
      default: "#ebeff2",
      paper: "#ebeff2",
    },
    text:{
      primary:"#282e38"
    }
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#71b6f9",
    },
    secondary: {
      main: "#ebeff2e3",
    },
    warning: {
      main: "#f9c851",
    },
    error: {
      main: "#ff5b5b",
    },
    info: {
      main: "#333942",
    },
    success: {
      main: "#10c469",
    },
    common: {
      black: "#f7f7f7",
    },
    background: {
      default: "#282e38",
      paper: "#282e38",
    },
    text:{
      primary:"#ebeff2e3"
    }
  },
});
export { lightTheme, darkTheme };
