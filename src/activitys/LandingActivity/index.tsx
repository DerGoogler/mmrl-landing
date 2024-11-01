import { Box, Grid, Button, Divider, Typography, Stack } from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { useTheme } from "@Hooks/useTheme";
import React from "react";
import { useConfirm } from "material-ui-confirm";
import { GridCard } from "./components/GridCard";
import { GridImage } from "./components/GridImage";
import { LandingToolbar } from "./components/LandingToolbar";
import { SectionHeader } from "./components/SectionHeader";
// @ts-ignore
import { FAQ } from "./components/FAQ";
import { RelativeContent } from "./components/Content";
import { Anchor } from "./components/Anchor";
import { IzzyOnDroidIcon } from "./components/Icons";

export const LandingActivity = () => {
  const { theme } = useTheme();
  const confirm = useConfirm();

  const acceptCallback = React.useCallback((callback) => {
    confirm({
      title: "Your privacy is more worth!",
      description: (
        <>
          Please make sure to read our <Anchor href="https://dergoogler.com/legal/privacy-policy">Privacy Policy</Anchor> and{" "}
          <Anchor href="https://dergoogler.com/legal/tos">Terms of Service</Anchor> before you continue.
        </>
      ),
      acknowledgement: "Accept",
    })
      .then(callback)
      .catch(() => {});
  }, []);

  return (
    <>
      <LandingToolbar
        menuItems={[
          {
            title: "GMR Guidelines",
            onClick() {
              open("https://dergoogler.com/gmr/guidelines", "_blank");
            },
          },
          {
            title: "MMAR Guidelines",
            onClick() {
              open("https://github.com/Magisk-Modules-Alt-Repo/submission", "_blank");
            },
          },
          {
            title: "Blog",
            onClick() {
              open("https://dergoogler.com", "_blank");
            },
          },
        ]}
      />

      <RelativeContent>
        <Box
          sx={{
            p: 5,
            position: "relative",
          }}
        >
          <Typography
            component="h1"
            sx={{
              [theme.breakpoints.up("md")]: {
                fontSize: "60px",
              },
              fontSize: "2.5rem",
              textAlign: "center",
            }}
          >
            Magisk Module Repo Loader
          </Typography>

          <Typography
            sx={{
              [theme.breakpoints.up("md")]: {
                fontSize: "24px",
              },

              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Your favorite module manager
          </Typography>
        </Box>

        <Stack
          sx={{
            width: "100%",
            [theme.breakpoints.down("md")]: {
              pr: 3,
              pl: 3,
            },
            [theme.breakpoints.up("sm")]: {
              width: "50%",
              m: 0,
            },
            alignSelf: "center",
            gap: theme.spacing(2),
          }}
          direction="column"
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Google />}
              onClick={() => {
                acceptCallback(() => {
                  open("https://play.google.com/store/apps/details?id=com.dergoogler.mmrl", "_blank");
                });
              }}
            >
              GET IT ON GOOGLE PLAY
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<GitHub />}
              onClick={() => {
                acceptCallback(() => {
                  open("https://github.com/DerGoogler/MMRL/releases", "_blank");
                });
              }}
            >
              GET IT ON GITHUB
            </Button>

            <Divider>or</Divider>
            <Button
              fullWidth
              variant="contained"
              startIcon={<IzzyOnDroidIcon />}
              onClick={() => {
                acceptCallback(() => {
                  open("https://apt.izzysoft.de/fdroid/index/apk/com.dergoogler.mmrl", "_blank");
                });
              }}
            >
              GET IT ON IZZYONDROID
            </Button>
          </Box>
        </Stack>

        <SectionHeader>Key Features</SectionHeader>

        <Box
          sx={{
            m: 3,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <GridCard
              title="Repositories"
              description="MMRL supports many repositories, like Magisk Modules Alt Repo, IzzyonDroid Magisk Repo and Googlers Magisk Repo"
            />
            <GridCard title="ModConf" description="Build advanced configuration pages with Kotlin and Jetpack Compose." />
            <GridCard
              title="Wide Root Support"
              description="MMRL supports a wide range of root solutions. This includes Magisk, KernelSU and APatch."
            />
            <GridCard title="Anti-Features" description="MMRL shows you if a module is not FOSS which set repo owners by their own." />
          </Grid>
        </Box>

        <SectionHeader>Screenshots</SectionHeader>

        <Box
          sx={{
            m: 3,
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {Array.from(Array(7), (_, i) => i + 1).map((num) => (
              <GridImage
                alt={`Screenshot ${num} of MMRL`}
                src={`https://raw.githubusercontent.com/DerGoogler/MMRL/refs/heads/master/fastlane/metadata/android/en-US/images/phoneScreenshots/${num}.png`}
              />
            ))}
          </Grid>
        </Box>

        <SectionHeader>Frequently Asked Questions</SectionHeader>

        <Box
          sx={{
            m: 3,
          }}
        >
          <FAQ
            items={[
              {
                q: "What are the requirements to use MMRL?",
                a: "The app require Android 8 and above and at least **4-6 GB of RAM**.",
              },
              {
                q: "What are currently known repos that will work in MMRL?",
                a: `Currently there are three repos that can be used in MMRL.
- Magisk Modules Alt Repo
- IzzyOnDroid Magisk Repo
- Googlers Magisk Repo`,
              },
              {
                q: "I want to use the Androidacy Magisk Repo here, does it work?",
                a: "No. The Androidacy Magisk Repo does not work in MMRL, and there are currently no plant to support it.",
              },
              {
                q: "How to use ModConf's from Magisk Modules?",
                a: `1. Open MMRL
2. Switch to the *Modules* tab
3. Scroll to your choosen module
4. Click on the little *gear icon*

> [!WARNING]
> The module developer develop the ModConf and errors that show up there has mainly nothing to do with MMRL`,
              },

              {
                q: "In what programming language is MMRL written?",
                a: "MMRL is written in Kotlin and uses Jetpack Compose for the UI.",
              },
              {
                q: "How can I build my own repo?",
                a: "Check out [magisk-modules-repo-util](https://github.com/Googlers-Repo/magisk-modules-repo-util.git) for more.",
              },
            ]}
          />
        </Box>
      </RelativeContent>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          p: 3,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Copyright &copy; {new Date().getUTCFullYear()} Googlers Repo, Der_Googler and it's contributors. All Rights Reserved.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Anchor href="https://dergoogler.com/mmrl" target="_blank" color="unset">
            <Typography variant="caption" color="text.secondary">
              Resources
            </Typography>
          </Anchor>
          <Anchor href="https://dergoogler.com/legal/privacy-policy" target="_blank" color="unset">
            <Typography variant="caption" color="text.secondary">
              Privacy
            </Typography>
          </Anchor>
          <Anchor href="https://dergoogler.com/legal/tos" target="_blank" color="unset">
            <Typography variant="caption" color="text.secondary">
              Terms
            </Typography>
          </Anchor>
        </Stack>
      </Stack>
    </>
  );
};
