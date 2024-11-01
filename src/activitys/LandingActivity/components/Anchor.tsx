import { useTheme } from "@Hooks/useTheme";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type AnchorProps = React.JSX.IntrinsicElements["a"] & {
  noIcon?: boolean;
  module?: string;
};

function increase_brightness(hex, percent) {
  hex = hex.replace(/^\s*#|\s*$/g, "");

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length == 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  var r = parseInt(hex.substr(0, 2), 16),
    g = parseInt(hex.substr(2, 2), 16),
    b = parseInt(hex.substr(4, 2), 16);

  return (
    "#" +
    (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
    (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
  );
}

const Anchor: React.FC<AnchorProps> = (props) => {
  const { theme } = useTheme();
  const { href, children, color = theme.palette.text.link, target } = props;

  const s = React.useMemo(
    () => ({
      display: "inline-block",
      "& a[href]": {
        cursor: "pointer",
        color: color,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        fontWeight: "unset",
        ":hover": {
          background: `linear-gradient(${color}, ${color}) 0 100% / 0.1em 0.1em repeat-x`,
        },
        "& code": {
          color: increase_brightness(color, 75.09),
          backgroundColor: `${color}4d`,
        },
      },
    }),
    [color]
  );

  return (
    <Box sx={s}>
      <Stack component="a" direction="row" spacing={0.5} href={href} target={target} color={color}>
        <Typography
          component="span"
          sx={{
            fontSize: "unset",
            fontFamily: "unset",
          }}
          color={color}
        >
          {children}
        </Typography>
      </Stack>
    </Box>
  );
};

export { Anchor };
