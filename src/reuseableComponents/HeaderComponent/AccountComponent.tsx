import * as React from "react";
import {
  AuthenticationContext,
  SessionContext,
  type Session,
} from "@toolpad/core/AppProvider";
import { Account } from "@toolpad/core/Account";
import { Box } from "@mui/material";

const demoSession = {
  user: {
    name: "Menna Bashir",
    email: "menna.bashiir@gmail.com",
    image: "/assets/admin.jpg",
  },
};

export default function AccountComponent() {
  const [session, setSession] = React.useState<Session | null>(demoSession);
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <Box
      sx={{
        button: { mx: { sm: "20px", xs: "0px" }, mt: session ? "" : "8px" },
      }}
    >
      <AuthenticationContext.Provider value={authentication}>
        <SessionContext.Provider value={session}>
          <Account />
        </SessionContext.Provider>
      </AuthenticationContext.Provider>
    </Box>
  );
}
