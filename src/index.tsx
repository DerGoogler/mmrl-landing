import React from "react";
import { CssBaseline } from "@mui/material";
import { ConfirmProvider } from "material-ui-confirm";
import { ThemeProvider } from "@Hooks/useTheme";
import { Preventer, render } from "react-render-tools";

import "@Styles/default.scss";
import { LandingActivity } from "@Activitys/LandingActivity";

render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Preventer prevent="contextmenu">
        <ConfirmProvider>
          <LandingActivity />
        </ConfirmProvider>
      </Preventer>
    </ThemeProvider>
  </React.StrictMode>,
  "landing"
);
