import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [42.851976, 74.567442],
  zoom: 15,
};

const coordinates = [
  [42.851512, 74.578710],
];


const Map4 = () => (
  <YMaps>
    <Map defaultState={mapData}
      width='100%'
      height='100vh'
      >
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);
export default Map4;