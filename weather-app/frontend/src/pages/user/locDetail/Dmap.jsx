//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '400px'
};

export class DMap extends React.Component {

  render() {
    const locations =this.props.locdata;
    const center = {lat:locations.lat,lng:locations.lon};

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAn3zNKgpV3fP1CAq8F1WtopQFzvR9If44"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
        >
        </GoogleMap>
      </LoadScript>
    )
  }
}