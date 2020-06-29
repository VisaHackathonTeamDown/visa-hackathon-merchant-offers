import React, {
  Component
} from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  SearchBox
} from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';
import './Map.css'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {},
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }

    this.handlePlaceSelected = this.handlePlaceSelected.bind(this);
  }

  handlePlaceSelected(place) {
    this.setState({
      currentLocation: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    });
    this.props.setCenter(this.state.currentLocation);
  }

  render() {
    return (
      <div className="map-container">

        <Autocomplete
          style={{
            width: '500px',
            height: '20px',
            paddingLeft: '5px',
            marginTop: '11px',
            marginBottom: '11px'
          }}
          onPlaceSelected={(place) => this.handlePlaceSelected(place)}
          types = {['(regions)'],['address'], ['establishment']}
        />

        <Map
          google = {this.props.google}
          zoom = {10}
          style = {{
            width: '45vw',
            height: '80vh'
          }}
          center = {this.state.currentLocation}
          />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbqBL1-PmwoQqfn7uQWLQaK9hPJFJQ8Ew'
})(MapContainer)
