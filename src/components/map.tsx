import L from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "../utils/data.json";
import { useEffect, useRef, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Marker,
  GeoJSON,
  TileLayer,
  MapContainer,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CloseIcon from "@mui/icons-material/Close";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

// Adicione o ícone ao Font Awesome
library.add(faMapMarkerAlt);

// O seu objeto GeoJSON
const geojsonData: any = {
  type: "FeatureCollection",
  features: [
    {
      geometry: {
        coordinates: [
          [
            [-42.7449713029, -22.1265073865],
            [-42.7493888107, -22.1363914954],
            [-42.750870657, -22.145736044],
            [-42.7556113308, -22.1488059812],
            [-42.7558486739, -22.1573330731],
            [-42.7445618867, -22.1652859499],
            [-42.7482659447, -22.1703656055],
            [-42.7444859087, -22.1750439141],
            [-42.7477785745, -22.1799451503],
            [-42.7477566896, -22.1800959752],
            [-42.7471199156, -22.1845677299],
            [-42.751285732, -22.1851184231],
            [-42.7517334043, -22.1898163397],
            [-42.7454581091, -22.1933538381],
            [-42.7428429014, -22.2004529317],
            [-42.733002968, -22.2091578485],
            [-42.7327921626, -22.2174760027],
            [-42.7371844732, -22.2198554277],
            [-42.7346397637, -22.2223851544],
            [-42.7442633868, -22.2333125049],
            [-42.7240702304, -22.244823471],
            [-42.7164404286, -22.2553525272],
            [-42.7186507969, -22.2589720649],
            [-42.7140073285, -22.2670445386],
            [-42.7179120482, -22.2766355353],
            [-42.7108438189, -22.287288556],
            [-42.7116787954, -22.2932091286],
            [-42.716117613, -22.2955975023],
            [-42.7201531208, -22.3062488567],
            [-42.7261584301, -22.3154810074],
            [-42.7179311554, -22.3277941437],
            [-42.7194995347, -22.3311848591],
            [-42.7236011218, -22.3349301137],
            [-42.7278137954, -22.335304417],
            [-42.7229265782, -22.3502470418],
            [-42.7271149421, -22.3550949032],
            [-42.7398958074, -22.3597835933],
            [-42.7467079028, -22.3726321476],
            [-42.7631493991, -22.3762611586],
            [-42.7688160729, -22.3832240863],
            [-42.7899580422, -22.3776304201],
            [-42.8030909648, -22.3773212098],
            [-42.8031758448, -22.3864988828],
            [-42.8153987489, -22.3906911314],
            [-42.8106705625, -22.4024729376],
            [-42.8268412641, -22.4119547934],
            [-42.8405083996, -22.4108460727],
            [-42.8522083084, -22.4156390742],
            [-42.851985597, -22.4252505358],
            [-42.8571817573, -22.4257830249],
            [-42.8701490583, -22.4311721487],
            [-42.8701745116, -22.438106366],
            [-42.8765404931, -22.4434843034],
            [-42.8747294284, -22.4475751896],
            [-42.8789798842, -22.4469211586],
            [-42.8913200357, -22.4567323574],
            [-42.8956082606, -22.456772037],
            [-42.9092185242, -22.4550240584],
            [-42.9118972042, -22.4544115135],
            [-42.9252357431, -22.4529341842],
            [-42.9280942044, -22.4493685037],
            [-42.9417336469, -22.4568970505],
            [-42.945190685, -22.455202871],
            [-42.9544253246, -22.4568860626],
            [-42.9573919349, -22.4650576686],
            [-42.9629005123, -22.4635728654],
            [-42.9738498697, -22.46996997],
            [-42.9874655381, -22.4619544167],
            [-42.9890750838, -22.4617088898],
            [-42.9990429133, -22.4585903162],
            [-43.0161261251, -22.4657209585],
            [-43.0246196103, -22.4609765421],
            [-43.0256249702, -22.4548398432],
            [-43.0237877721, -22.441866301],
            [-43.0220413332, -22.4401660983],
            [-43.0321219523, -22.4328894832],
            [-43.0350384365, -22.4230840528],
            [-43.0315391782, -22.4197031518],
            [-43.0384031872, -22.4159015757],
            [-43.0274286986, -22.3924972978],
            [-43.0336518159, -22.389659954],
            [-43.0290701973, -22.3772645879],
            [-43.0337639604, -22.3694666839],
            [-43.0244750843, -22.3593241916],
            [-43.0200121981, -22.355184056],
            [-43.0263433349, -22.3523109625],
            [-43.0278436117, -22.3453060699],
            [-43.0335420842, -22.3445010488],
            [-43.0250701236, -22.3388990747],
            [-43.0299337882, -22.3380748852],
            [-43.0336778918, -22.3281523783],
            [-43.0480913926, -22.3265871487],
            [-43.044877162, -22.319612578],
            [-43.0435437731, -22.317717759],
            [-43.0390643561, -22.3113515559],
            [-43.0244008466, -22.3064160783],
            [-43.0128491112, -22.2983084474],
            [-43.0167380507, -22.2896279901],
            [-43.0052561537, -22.2870592558],
            [-42.9966766323, -22.2806489992],
            [-42.9893996909, -22.2779433198],
            [-42.9875091697, -22.2688855375],
            [-42.983212004, -22.2629833234],
            [-42.9804281767, -22.2642071301],
            [-42.9801899042, -22.2642063457],
            [-42.9737623456, -22.262271948],
            [-42.9704604982, -22.2541181824],
            [-42.9570439329, -22.2529258226],
            [-42.9371569183, -22.2315193126],
            [-42.9255329337, -22.225265316],
            [-42.9143177766, -22.223246071],
            [-42.9067125316, -22.2247604848],
            [-42.9065295134, -22.2246528369],
            [-42.8997874891, -22.2085185873],
            [-42.8927367644, -22.1897487154],
            [-42.8871248796, -22.1877310339],
            [-42.8865009915, -22.1875438426],
            [-42.8775724291, -22.1859212062],
            [-42.8763690586, -22.1908931068],
            [-42.8681503723, -22.1904376797],
            [-42.8541207909, -22.1829871781],
            [-42.8519158329, -22.1775195205],
            [-42.8454519404, -22.1738138337],
            [-42.8388424895, -22.1749002475],
            [-42.8145347813, -22.1630298323],
            [-42.8058488043, -22.1566696777],
            [-42.8021448551, -22.1488835104],
            [-42.7943399226, -22.144521269],
            [-42.7795692111, -22.1334933754],
            [-42.7754811516, -22.1302590282],
            [-42.768511041, -22.1317400226],
            [-42.7649916235, -22.1281209689],
            [-42.7625153088, -22.127368691],
            [-42.7612638408, -22.1269889666],
            [-42.74712452, -22.1226953372],
            [-42.7449713029, -22.1265073865],
          ],
        ],
        type: "Polygon",
      },
      id: "0",
      type: "Feature",
      properties: {
        name: "", // Propriedade de nome adicionada para o exemplo
      },
    },
  ],
};

const defaultStyle = {
  color: "#344e4145",
  fillColor: "#588157",
  fillOpacity: 0.3,
  weight: 2,
};

const createIcon = () => {
  const iconUrl = `/semaforo.svg`;
  const size: [number, number] = [28, 28];
  const anchor: [number, number] = [Math.round(size[0] / 2), size[1] + 6];
  return L.icon({
    iconUrl,
    iconSize: size,
    iconAnchor: anchor,
    popupAnchor: [0, -Math.round(size[1] / 1.1)],
    tooltipAnchor: [0, -Math.round(size[1] / 2.5)],
    className: `pin-icon`,
  });
};

function Map({ bairrosFiltrados, sinalSelecionado, onSinalSelect }: any) {
  const geoJsonRef = useRef(null);

  // Componente interno para controlar o mapa via hook useMap
  function MapController({ sinalSelecionado }: any) {
    const map = useMap();

    useEffect(() => {
      if (sinalSelecionado && map) {
        const lat = sinalSelecionado.latitude ?? sinalSelecionado.lat;
        const lng = sinalSelecionado.longitude ?? sinalSelecionado.lng;
        if (typeof lat === "number" && typeof lng === "number") {
          // Se for passado um zoom no sinal, usa ele; caso contrário usa 17 como padrão
          const targetZoom =
            typeof sinalSelecionado.zoom === "number"
              ? sinalSelecionado.zoom
              : 17;
          // Usa flyTo para animação suave até o ponto com o zoom desejado
          map.flyTo([lat, lng], targetZoom, { animate: true });
        }
      }
    }, [sinalSelecionado, map]);

    return null;
  }
  const [unidadeSelecionada, setUnidadeSelecionada] = useState<any>(null);
  const [unidadesVisiveis, setUnidadesVisiveis] = useState<any>(data.semaforos);

  useEffect(() => {
    const filtrarUnidades = () => {
      let filtrado = data.semaforos;
      if (bairrosFiltrados.length > 0) {
        filtrado = filtrado.filter((u) => bairrosFiltrados.includes(u.bairro));
      }

      setUnidadeSelecionada(null);
      setUnidadesVisiveis(filtrado);
    };

    filtrarUnidades();
  }, [bairrosFiltrados]);

  const CardInfo = () => {
    return (
      <Card
        sx={{
          top: "25%",
          left: "15%",
          right: "15%",
          zIndex: 1000,
          maxWidth: 545,
          position: "absolute",
        }}
      >
        <CardHeader
          action={
            <IconButton onClick={() => setUnidadeSelecionada(null)}>
              <CloseIcon />
            </IconButton>
          }
          avatar={
            <Avatar
              sx={{
                bgcolor: "#588157",
              }}
              aria-label="recipe"
            >
              {unidadeSelecionada.numero}
            </Avatar>
          }
          title={`Semáforo nº ${unidadeSelecionada?.numero}`}
        />
        <CardContent>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Bairro: {unidadeSelecionada?.bairro}
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Ponto A: {unidadeSelecionada?.pontoA}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Ponto B: {unidadeSelecionada?.pontoB}
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Link no Maps:{" "}
            <a
              href={unidadeSelecionada?.geolocalizacao}
              target="_blank"
              rel="noreferrer"
            >
              {unidadeSelecionada?.geolocalizacao}
            </a>
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    );
  };

  return (
    <div style={{ height: "94%", width: "100%", position: "relative" }}>
      <MapContainer
        center={[-22.4138758, -42.9704734]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {unidadesVisiveis &&
          unidadesVisiveis.map((unidade: any) => (
            <Marker
              key={unidade.numero}
              interactive={true}
              icon={createIcon()}
              position={[unidade.latitude, unidade.longitude]}
              eventHandlers={{
                click: () => {
                  // Atualiza tanto o estado local quanto notifica o componente pai
                  setUnidadeSelecionada(unidade);
                  if (onSinalSelect) {
                    onSinalSelect(unidade);
                  }
                },
              }}
            ></Marker>
          ))}

        <GeoJSON ref={geoJsonRef} data={geojsonData} style={defaultStyle} />
        {/* Controller para centralizar o mapa quando o sinalSelecionado mudar */}
        <MapController sinalSelecionado={sinalSelecionado} />
      </MapContainer>
      {unidadeSelecionada && <CardInfo />}
    </div>
  );
}

export default Map;
