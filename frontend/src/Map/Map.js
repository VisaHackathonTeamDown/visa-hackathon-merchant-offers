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

  displayMarkers = () => {
    if (this.props.locations.length != 0) {
      return this.props.locations.map((merchant, index) => {
        return <Marker
          key = {index}
          id = {index}
          onClick = {this.onMarkerClick}
          position = {{
            lat: merchant.location[0],
            lng: merchant.location[1]
          }}
          label={(index + 1).toString()}
        >
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
  apiKey: 'GOOGLE_KEY'
})(MapContainer)
