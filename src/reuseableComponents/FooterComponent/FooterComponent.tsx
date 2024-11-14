import Typography from "@mui/material/Typography";
import { type SidebarFooterProps } from "@toolpad/core/DashboardLayout";

export default function FooterComponent({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini
        ? "© Menna"
        : `© ${new Date().getFullYear()} Made with love by Menna Bashir`}
    </Typography>
  );
}
