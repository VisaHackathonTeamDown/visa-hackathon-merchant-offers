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
  state = {
    location: ""
  };

  componentDidMount() {
    const app = this;
    function initAutocomplete() {
      var input = document.getElementById("pac-input");
      var searchBox = new window.google.maps.places.SearchBox(input);
      searchBox.addListener("places_changed", function() {
        app.setState({ location: document.getElementById("pac-input").value });
      });
    }
    initAutocomplete();

  constructor(props) {
    super(props);

    this.state = {
      stores: [
              { lat: 38.892038, lng: -77.198847 },
              { lat: 38.492837, lng: -76.894038 }
              ]
    }
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key ={index} id ={index} position ={{lat: store.lat, lng: store.lng}}
      />
    }

    )
  }

  handleChange = e => {
    this.setState({ location: e.target.value });
  };

  render() {
    return (
      <div className="map-container">

        <Map
          google = {this.props.google}
          zoom = {10}
          style = {mapStyles}
          initialCenter = {{ lat: 38.889321, lng: -77.050166 }}
        >
        {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbqBL1-PmwoQqfn7uQWLQaK9hPJFJQ8Ew'
})(MapContainer)
