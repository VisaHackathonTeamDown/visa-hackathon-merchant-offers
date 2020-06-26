import React from 'react';
import ReactModal from 'react-modal';
import './App.css';

import Merchants from './Merchants/Merchants';
import Map from './Map/Map'
import Offers from './Merchants/Offers/Offers';

class AppComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			showModal: false
		}

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal() {
		this.setState({
			showModal: true
		});
	}

	closeModal() {
		this.setState({
			showModal: false
		});
	}

	render() {
		return (
			<div className="App">
		      <header className="App-header">
		        <p>Visa Small Business Rewards Platform</p>
		      </header>
		      <div className="app-container">
		        <Map />
		        <Merchants openModal={this.showModal} />
		        <Offers isVisible={this.state.showModal} closeModal={this.closeModal} />
		      </div>
		    </div>
		);
	}
}

export default AppComponent;
