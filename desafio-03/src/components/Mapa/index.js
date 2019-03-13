import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import 'mapbox-gl/dist/mapbox-gl.css'; // eslint-disable-line

const Mapa = ({ handleClick, onViewportChange, ...rest }) => (
  <MapGL
    {...rest}
    onClick={handleClick}
    mapStyle="mapbox://styles/mapbox/basic-v9"
    mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
    onViewportChange={onViewportChange}
  >
    <Marker latitude={-23.5439948} longitude={-46.6065452} onClick={handleClick} captureClick>
      <img
        style={{
          borderRadius: 100,
          width: 48,
          height: 48,
        }}
        alt="map"
        src="https://avatars2.githubusercontent.com/u/2254731?v=4"
      />
    </Marker>
  </MapGL>
);

Mapa.propTypes = {
  handleClick: PropTypes.func.isRequired,
  onViewportChange: PropTypes.func.isRequired,
};

export default Mapa;
