import { useTheme } from "@Hooks/useTheme";
import { alpha } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface GridCardProps {
  title?: string;
  description?: string;
}

const GridCard = (props: GridCardProps) => {
  const { theme } = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={0}
        sx={{
          p: 2,
          height: "100%",
          backgroundImage: "none",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography sx={{ color: "text.primary", mb: 1.5 }}>{props.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }} variant="body2">{props.description}</Typography>
      </Card>
    </Grid>
  );
};

export { GridCard, GridCardProps };
