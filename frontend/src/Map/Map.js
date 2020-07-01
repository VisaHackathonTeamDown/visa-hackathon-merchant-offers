import React, {
  Component
} from 'react';
import {
  Map,
  GoogleApiWrapper,
  Marker,
  SearchBox
} from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';
import InfoWindow from 'react-google-maps';
import './Map.css'

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {},
      showingInfoWindow: false,//false, Hides or the shows the infoWindow
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
      },
    });
    this.props.setCenter(this.state.currentLocation);
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  displayMarkers = () => {
    if (this.props.locations.length != 0) {
      return this.props.locations.map((merchant, index) => {
        return <Marker
          key = {index}
          id = {index}
          onClick = {this.onMarkerClick}
          position = {{
            lat: merchant[0],
            lng: merchant[1]
          }}
        >
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Marker>
      })
    }
  }

  render() {
    return (
      <div className="map-container">

        <Autocomplete
          style={{
            width: '90%',
            height: '32px',
            paddingLeft: '8px',
            marginTop: '16px',
            marginBottom: '16px',
            backgroundColor: '#EDEDED',
            border: 'none',
            fontSize: '18px',
            outline: 'none',
            overflow: 'scroll'
          }}
          onPlaceSelected = {(place) => this.handlePlaceSelected(place)}
          types = {['(regions)'],['address'], ['establishment']}
        />

        <Map
          google = {this.props.google}
          onClick = {this.onMapClicked}
          zoom = {10}
          style = {{
            width: '41vw',
            height: '41vw',
            marginLeft: '24px'
          }}
          center = {this.state.currentLocation}
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
