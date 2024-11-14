import * as React from "react";
import Box from "@mui/material/Box";
import {
  Dashboard,
  Group,
  Description,
  ManageAccounts,
  CalendarTodayOutlined,
  QuizOutlined,
  BarChart,
  DonutSmall,
  Timeline,
  Terrain,
  ContactPage,
} from "@mui/icons-material";

import {
  AppProvider,
  type Router,
  type Navigation,
} from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DashboardPage from "../DashpoardPage/DashboardPage";
import ManageTeamPage from "../ManageTeamPage/ManageTeamPage";
import InvoicesBalancesPage from "../InvoicesBalancesPage/InvoicesBalancesPage";
import ProfileFormPage from "../ProfileFormPage/ProfileFormPage";
import FAQPage from "../FAQPage/FAQPage";
import BarChartPage from "../BarChartPage/BarChartPage";
import PieChartPage from "../PieChartPage/PieChartPage";
import LineChartPage from "../LineChartPage/LineChartPage";
import GeographyChartPage from "../GeographyChartPage/GeographyChartPage";
import HeaderComponent from "../../reuseableComponents/HeaderComponent/HeaderComponent";
import FooterComponent from "../../reuseableComponents/FooterComponent/FooterComponent";
import ContactsInformationPage from "../ContactsInformationPage/ContactsInformationPage";
import { darkTheme, lightTheme } from "../../utils/theme";
import { ThemeContext } from "../../utils/themeContext";
import CalendarPage from "../CalenderPage/CalenderPage";

const NAVIGATION: Navigation = [
  {
    segment: "",
    title: "Dashboard",
    icon: <Dashboard />,
  },
  {
    segment: "mange-team",
    title: "Manage Team",
    icon: <Group />,
  },
  {
    segment: "contact-info",
    title: "Contacts Information",
    icon: <ContactPage />,
  },
  {
    segment: "invoices-brand",
    title: "Invoices Brand",
    icon: <Description />,
  },
  {
    segment: "profile-form",
    title: "Profile Form",
    icon: <ManageAccounts />,
  },
  {
    segment: "calendar",
    title: "Calendar",
    icon: <CalendarTodayOutlined />,
  },
  {
    segment: "faq",
    title: "FAQ Page",
    icon: <QuizOutlined />,
  },
  {
    segment: "bar-chart",
    title: "Bar Chart",
    icon: <BarChart />,
  },
  {
    segment: "pie-chart",
    title: "Pie Chart",
    icon: <DonutSmall />,
  },
  {
    segment: "line-chart",
    title: "Line Chart",
    icon: <Timeline />,
  },
  {
    segment: "geography-chart",
    title: "Geography Chart",
    icon: <Terrain />,
  },
];

interface typeContent {
  component: React.ReactNode;
  title: string;
}
let content: typeContent = {
  component: <DashboardPage />,
  title: "Dashboard",
};

function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {content.component}
    </Box>
  );
}

export default function MainPage() {
  const { mode } = React.useContext(ThemeContext);
  const [pathname, setPathname] = React.useState("/");
  //show component based on path
  switch (pathname) {
    case "/":
      content = {
        component: <DashboardPage />,
        title: "Dashboard",
      };
      break;
    case "/mange-team":
      content = {
        component: <ManageTeamPage />,
        title: "Manage Team",
      };
      break;
    case "/contact-info":
      content = {
        component: <ContactsInformationPage />,
        title: "Contacts Information",
      };
      break;
    case "/invoices-brand":
      content = {
        component: <InvoicesBalancesPage />,
        title: "Invoices Balances",
      };
      break;
    case "/profile-form":
      content = {
        component: <ProfileFormPage />,
        title: "Profile Form",
      };
      break;
    case "/calendar":
      content = {
        component: <CalendarPage />,
        title: "Calendar",
      };
      break;
    case "/faq":
      content = {
        component: <FAQPage />,
        title: "FAQ Page",
      };
      break;
    case "/bar-chart":
      content = {
        component: <BarChartPage />,
        title: "Bar Chart",
      };
      break;
    case "/pie-chart":
      content = {
        component: <PieChartPage />,
        title: "Pie Chart",
      };
      break;
    case "/line-chart":
      content = {
        component: <LineChartPage />,
        title: "Line Chart",
      };
      break;
    case "/geography-chart":
      content = {
        component: <GeographyChartPage />,
        title: "Geography Chart",
      };
      break;
    default:
      content = {
        component: <DashboardPage />,
        title: "Dashboard",
      };
      break;
  }
  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => {
        setPathname(String(path));
        history.replaceState(null, "", path); //Not Reload
        // location.pathname = `${path}`;//Reload page
      },
    };
  }, [pathname]);

  return (
    <AppProvider
      branding={{
        logo: false,
        title: `${content.title}`,
      }}
      navigation={NAVIGATION}
      router={router}
      theme={mode === "dark" ? darkTheme : lightTheme}
    >
      <DashboardLayout
        defaultSidebarCollapsed
        slots={{
          toolbarActions: HeaderComponent,
          sidebarFooter: FooterComponent,
        }}
        sx={{
          fontFamily: "karla",
          header: {
            border: "none",
          },
          h6: {
            fontWeight: "700",
            color: "common.black",
            fontFamily: "karla",
            fontSize: { xs: "18px", sm: "20px" },
            position: "absolute",
            left: { xs: "60px", sm: "100px" },
          },
        }}
      >
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}
