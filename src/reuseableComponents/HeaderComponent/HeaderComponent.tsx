import { NotificationsOutlined, Search } from "@mui/icons-material";
import { Badge, Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import AccountComponent from "./AccountComponent";

import ThemeToggleButton from "./ToggleComponent";

export default function HeaderComponent() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <div>
        <IconButton
          type="button"
          aria-label="search"
          sx={{
            display: { xs: "flex", sm: "none" },
          }}
          onClick={() => setShowSearch(!showSearch)}
        >
          <Search />
        </IconButton>
      </div>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton
                type="button"
                aria-label="search"
                size="small"
                sx={{
                  display: {
                    xs: "none",
                    sm: "inline-block",
                  },
                }}
              >
                <Search />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{
          display: {
            xs: showSearch ? "inline-block" : "none",
            sm: "inline-block",
          },
          fieldset: {
            borderRadius: "17px",
          },

          position: {
            sm: "relative",
            xs: "absolute",
          },
          bottom: {
            sm: "0px",
            xs: "-41px",
          },
          right: {
            sm: "0px",
            xs: "60px",
          },
          mr: {
            xs: "0px",
            sm: "20px !important",
          },
        }}
      />

      <Box>
        <Badge
          color="error"
          variant="dot"
          sx={{
            cursor: "pointer",
            span: { top: "3px", right: "3px" },

            my: "8px",
          }}
        >
          <NotificationsOutlined color="secondary" />
        </Badge>
      </Box>
      <AccountComponent />
      <ThemeToggleButton />
    </>
  );
}
