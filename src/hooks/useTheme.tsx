import React from "react";
import { useTheme as useMom, createTheme, ThemeProvider as MumProvider } from "@mui/material";

export const useTheme = () => {
  const theme = useMom();
  return {
    theme: theme as MMRLTheme,
  };
};

const THIS_IS_THE_THEME_OBJECT_OF_THIS_F_APP = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          wordWrap: "break-word",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiSwitch-switchBase": {
            color: theme.palette.background.default,
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: theme.palette.background.default,
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            opacity: "unset",
            backgroundColor: theme.palette.primary.main,
          },
          "& .MuiSwitch-switchBase + .MuiSwitch-track": {
            backgroundColor: theme.palette.text.secondary,
          },

          padding: 8,
          "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
            "&:before, &:after": {
              content: '""',
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: 16,
              height: 16,
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2,
          },
        }),
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: "0",
            bottom: "0",
            top: "0",
            left: "0",
            zIndex: "-1",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiDrawer-paper": {
            backgroundImage: "none",
            borderTop: `1px solid #333638`,
          },
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent",
            backdropFilter: "blur(4px)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiModal-backdrop": {
            // position: "fixed",
            position: "absolute",
            display: "flex",
            WebkitBoxAlign: "center",
            alignItems: "center",
            WebkitBoxPack: "center",
            justifyContent: "center",
            inset: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent",
            zIndex: "-1",
            backdropFilter: "blur(4px)",
          },
          "& .MuiDialog-paper": {
            backgroundColor: theme.palette.background.paper,
            borderRadius: 35,
            backgroundImage: "none",
          },
          "& .MuiDialogActions-root": {
            padding: 16,
          },
          "& .MuiDialogTitle-root": {
            padding: "24px 32px",
          },
          "& .MuiDialogContent-root": {
            padding: "20px 32px",
            borderTop: "none",
            borderBottom: "none",
          },
          "& .MuiButtonBase-root": {
            color: "#f3f5f7",
          },
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root": {
            borderBottom: "1px solid #f3f5f726",
          },
          "& .MuiTabs-indicator": {
            height: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.variant === "outlined" && {
            color: "white",
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: "none",
          }),
          ...(ownerState.variant === "contained" && {
            color: "black",
            borderRadius: 100,
            backgroundColor: "#90cef4",

            ":disabled": {
              cursor: "not-allowed",
              color: "black",
              opacity: ".3",
            },
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#5085a5",
            },
          }),
        }),
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: "dark",
    primary: {
      header: "#101010d9",
      main: "#ffffff",
      dark: "#353535",
    },
    secondary: {
      main: "#ffffff",
      light: "#0a0a0a",
      dark: "#1e1e1e",
    },
    background: {
      paper: "#161d22",
      default: "#0f1417",
    },
    text: {
      link: "#90cef4",
      primary: "#f3f5f7",
      secondary: "#899095",
    },
    divider: "#3d4449",
    menuoutline: "#333638",
  },
} as unknown as MMRLTheme);

export const ThemeProvider = (props: React.PropsWithChildren) => (
  <MumProvider theme={THIS_IS_THE_THEME_OBJECT_OF_THIS_F_APP} children={props.children} />
);
