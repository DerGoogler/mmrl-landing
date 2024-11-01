import { styled, useMediaQuery } from "@mui/material";

interface ContentProps {
  /**
   * This property affects only small screens
   */
  zeroMargin?: boolean;
  minWidth?: number;
  maxWidth?: number;
}

interface IntrinsicElements extends Omit<React.JSX.IntrinsicElements, "section"> {
  section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & ContentProps, HTMLElement>;
}

const Content = styled<keyof IntrinsicElements>("section")((props: ContentProps) => ({
  display: "flex",
  flexDirection: "column",
  margin: props.zeroMargin ? 0 : 8,
}));

const RelativeContent = styled(Content)((props: ContentProps) => {
  const matches = useMediaQuery("(max-width: 767px)");

  return {
    boxSizing: "border-box",
    minWidth: props.minWidth ? props.minWidth : 200,
    maxWidth: props.maxWidth ? props.maxWidth : 980,
    margin: "0 auto",
    ...(matches ? { padding: props.zeroMargin ? 0 : 8 } : { padding: "8px 45px 8px 45px" }),
  };
});

export { RelativeContent };