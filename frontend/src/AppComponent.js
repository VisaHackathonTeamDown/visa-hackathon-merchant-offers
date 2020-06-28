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

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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
		return (
			<div className="App">
		      <header className="App-header">
		        <p>Visa Small Business Rewards Platform</p>
		      </header>
				<div className="modal" hidden={!this.state.showModal}>
					{/* EDIT STARTING HERE ANGELA */}
					<div className="modal-main">
						This is some text
						<button onClick={this.closeModal}>Close</button>
					</div>
					{/* EDIT UNTIL HERE ANGELA */}
				</div>
		      <div className="app-container">
		        <Map />
		        <Merchants openModal={this.openModal} />
		      </div>
		    </div>
		);
	}
}

export default AppComponent;
