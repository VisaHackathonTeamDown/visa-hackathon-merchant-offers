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
      markerLocations: this.props.locations,
      //showingInfoWindow: //false, Hides or the shows the infoWindow
      //activeMarker: {}, //Shows the active marker upon click
      //selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }
    console.log(this.state);
    console.log(this.state.markerLocations[0]);
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

  displayMarkers = () => {
    return this.state.markerLocations.map((store, index) => {
      console.log(store)
      return <Marker
        key = {index}
        id = {index}
        position = {{
          lat: store[0],
          lng: store[1]
        }}
      />
    })
  }

  render() {
    return (
      <div className="map-container">

        <Autocomplete
          style={{
            width: '90%',
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
        >

        </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbqBL1-PmwoQqfn7uQWLQaK9hPJFJQ8Ew'
})(MapContainer)
