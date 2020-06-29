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



const mapStyles = {
  width: '45vw',
  height: '80vh'
};

class Contents extends Component {

}


export class MapContainer extends Component {
  constructor(props) {
    super(props);
    //const {lat, lng} = this.props.initialCenter;
    this.state = {
        currentLocation: {
          lat: 38.89321,
          lng: -77.050166
          //lat: lat,
          //lng: lng
        },
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
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
          types = {['(regions)'],['address'], ['establishment']}
        />

        <Map
          google = {this.props.google}
          zoom = {10}
          style = {mapStyles}
          center = {{lat: 38.89321,
          lng: -77.050166}}
          />
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDbqBL1-PmwoQqfn7uQWLQaK9hPJFJQ8Ew'
})(MapContainer)
