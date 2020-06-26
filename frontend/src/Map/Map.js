import React, {
  Component
} from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker
} from 'google-maps-react';

import Autocomplete from 'react-google-autocomplete';
import Geocode from 'react-geocode';

import './Map.css'

const mapStyles = {
  width: '45vw',
  height: '45vh'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
        <Map
          google = {this.props.google}
          zoom = {10}
          style = {mapStyles}
          initialCenter = {{ lat: 38.889321, lng: -77.050166 }}
        />
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbqBL1-PmwoQqfn7uQWLQaK9hPJFJQ8Ew'
})(MapContainer)
