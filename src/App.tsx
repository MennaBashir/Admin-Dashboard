import MainPage from "./pages/MainPage/MainPage";
import { Theme } from "./utils/themeContext";

export default function App() {
  return (
    <Theme>
      <MainPage />
    </Theme>
  );
}
