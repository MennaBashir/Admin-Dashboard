import { NightsStay, WbTwilight } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { ThemeContext } from "../../utils/themeContext";

export default function ThemeToggleButton() {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <IconButton aria-label="change theme" onClick={toggleMode}>
      {mode === "light" ? <NightsStay /> : <WbTwilight />}
    </IconButton>
  );
}
