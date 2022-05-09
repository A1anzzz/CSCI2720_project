import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export class BaseMap extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAn3zNKgpV3fP1CAq8F1WtopQFzvR9If44"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default BaseMap;
