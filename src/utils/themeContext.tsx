import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode, createContext, useState } from "react";
interface typeContext {
  mode: string;
  toggleMode: () => void;
}
export const ThemeContext = createContext<typeContext | any>("");

export function Theme({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState(
    localStorage.getItem("mode")
      ? JSON.parse(localStorage.getItem("mode") as string)
      : "dark"
  );
  const toggleMode = () => {
    let newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", JSON.stringify(newMode));
  };
  const value = { mode, toggleMode };
  const theme = createTheme({
    palette: {
      mode: mode === "dark" ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
