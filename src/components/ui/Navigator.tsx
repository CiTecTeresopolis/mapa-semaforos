// Navigator.tsx
import data from "../../utils/data.json";
import Drawer from "@mui/material/Drawer";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Box,
  Card,
  Checkbox,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useEffect, useState } from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Navigator(props: any) {
  const { handleBairrosChange, bairrosFiltrados = [], ...other } = props;
  const [unidadesVisiveis, setUnidadesVisiveis] = useState<any>(data.semaforos);
  const allBairros = [
    ...new Set(data.semaforos.flatMap((item) => item.bairro)),
  ].sort();

  useEffect(() => {
    const filtrarUnidades = () => {
      let filtrado = data.semaforos;
      if (bairrosFiltrados.length > 0) {
        filtrado = filtrado.filter((u) => bairrosFiltrados.includes(u.bairro));
      }

      setUnidadesVisiveis(filtrado);
    };
    filtrarUnidades();
  }, [bairrosFiltrados]);

  return (
    <Drawer variant="permanent" {...other}>
      <Box m="20px" minHeight="5vh">
        <Autocomplete
          multiple
          id="bairro-select"
          options={allBairros}
          value={bairrosFiltrados}
          onChange={handleBairrosChange}
          disableCloseOnSelect
          getOptionLabel={(option) => option}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Filtrar por Bairros"
              placeholder="Pesquisar..."
            />
          )}
        />
      </Box>
      <Box m="0px 20px" minHeight="5vh">
        {unidadesVisiveis.map((unidade: any) => (
          <Card
            variant="outlined"
            sx={{ mt: 2, p: 2, backgroundColor: "#588157" }}
          >
            <Typography variant="body2" color="white" align="left">
              Nº {unidade.numero} - {unidade.pontoA}
            </Typography>
          </Card>
        ))}
      </Box>
    </Drawer>
  );
}
