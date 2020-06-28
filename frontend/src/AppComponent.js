import React from 'react';
import './App.css';

import Merchants from './Merchants/Merchants';
import Map from './Map/Map';

class AppComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			showModal: false,
			locations: []
		}

		this.setLocations = this.setLocations.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	setLocations(coordinates) {
		this.setState({
			locations: coordinates
		});
		console.log(this.state.locations); // Sent to Map component
	}

	openModal(merchant) {
		this.setState({
			showModal: true
		});
		console.log(merchant); // Do something with the merchant data
	}

	closeModal() {
		this.setState({
			showModal: false
		});
	}

	render() {
		let offersList = [];
		return (
			<div className="App">
		      <header className="App-header">
		        <p>Visa Small Business Rewards Platform</p>
		      </header>
				<div className="modal" hidden={!this.state.showModal}>
					{/* EDIT STARTING HERE ANGELA */}
					<div className="modal-main">
						<div className="top-merchant">
							<button className="close-button" 
								onClick={this.closeModal}>X
							</button>
							<div className="merch-info">
								<h3>Merchant name</h3>
								<p>Merchant address</p>
								<p>Merchant categories</p>
							</div>
						</div>
						<div className="bottom-offers">
							<div className="offers-title">
								<p>Offers Page 1 of 4 </p>
								<div className="offers-subtitle">
									<p> title released expiration </p>
								</div>
							</div>
						
							<div className="list-container">
								<ul className="offers-list">{offersList}</ul>
							</div>
						</div>
					</div>

					
					{/* EDIT UNTIL HERE ANGELA */}
				</div>
		      <div className="app-container">
		        <Map locations={this.state.locations} />
		        <Merchants setLocations={this.setLocations} openModal={this.openModal} />
		      </div>
		    </div>
		);
	}
}

export default AppComponent;
