//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript,  MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '1200px',
  height: '400px'
};

export class BaseMap extends React.Component {

  state = {
		position : null,
    name: null,
    ID: null
	}

	handleToggleOpen(item,city){
		this.setState({
			position : {
				lat : item.lat,
				lng : item.lng
			},
      name: city.name	,
      ID: city.ID	
		})
	}

  createKey(location) {
    return location.lat + location.lng
  }

  render() {
    const locations =this.props.locdata;
    const center = {lat:locations[0].lat,lng:locations[0].lon};

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAn3zNKgpV3fP1CAq8F1WtopQFzvR9If44"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1.4}
        >
          <MarkerClusterer>
          {(clusterer) =>
            locations.map((location) => {
              const loc={lat:location.lat,lng:location.lon};
              const city = {name:location.name, ID:location._id};
              return(
                <Marker
                  key={this.createKey(loc)} position={loc} clusterer={clusterer}
                  onClick={() => this.handleToggleOpen(loc,city)}
                  />
              )
            })
          }
          </MarkerClusterer>
          {this.state.position && 
					 <InfoWindow position={this.state.position}>
					     <Link to={"/Detail/" + this.state.name}><h4>{this.state.name}</h4></Link>
					 </InfoWindow>
				 }
        </GoogleMap>
      </LoadScript>
    )
  }
}
