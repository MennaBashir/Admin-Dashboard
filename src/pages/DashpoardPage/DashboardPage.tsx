import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import "./dashboardStyle.scss";
export default function DashboardPage() {
  return (
    <main style={{ width: "100%", paddingLeft: "20px", paddingRight: "20px" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
