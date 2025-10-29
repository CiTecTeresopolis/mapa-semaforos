import Map from "../map";
import * as React from "react";
import Box from "@mui/material/Box";
import Navigator from "./Navigator";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const drawerWidth = 450;

let theme = createTheme({
  palette: {
    primary: {
      light: "#a3b18a",
      main: "#588157",
      dark: "#344e41",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#f7f7f7ff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

export default function Paperbase() {
  const [bairrosFiltrados, setBairrosFiltrados] = React.useState([]);

  const handleBairrosChange = (_: any, value: any) => {
    setBairrosFiltrados(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
            bairrosFiltrados={bairrosFiltrados}
            handleBairrosChange={handleBairrosChange}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box component="main" sx={{ flex: 1 }}>
            <Box
              component="section"
              sx={{
                p: 2,
                fontSize: 12,
                textAlign: "center",
                backgroundColor: "#588157",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              SEMÁFOROS - MUNICÍPIO DE TERESÓPOLIS
            </Box>
            <Map bairrosFiltrados={bairrosFiltrados} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
