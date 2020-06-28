import React from 'react';
import './App.css';

import Merchants from './Merchants/Merchants';
import Map from './Map/Map';

class AppComponent extends React.Component {

	offersPerPage = 5;

	constructor() {
		super();
		this.state = {
			showModal: false,
			locations: [],
			numPages: 0,
			pageNumber: 1,
			prevDisabled: true,
			nextDisabled: false,
			merchant: null
		}

		this.setLocations = this.setLocations.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}

	setLocations(coordinates) {
		this.setState({
			locations: coordinates
		});
	}

	setNumPages(numOffers) {
		if (numOffers <= 0) {
			this.setState({
				pageNumber: 0,
				nextDisabled: true
			});
		} else if (numOffers <= this.offersPerPage) {
			this.setState({
				numPages: 1,
				nextDisabled: true
			});
		} else {
			this.setState({
				numPages: Math.ceil(numOffers / this.offersPerPage)
			});
		}
	}

	openModal(merchant) {
		this.setState({
			showModal: true,
			merchant: merchant
		});
		this.setNumPages(merchant.offers.length);
	}

	closeModal() {
		this.setState({
			showModal: false,
			merchant: null
		});
	}

	prevPage() {

		if (this.state.pageNumber == 2) {
			this.setState({
				pageNumber: this.state.pageNumber - 1,
				prevDisabled: true
			});
		} else {
			this.setState({
				pageNumber: this.state.pageNumber - 1
			});
		}
		if (this.state.nextDisabled) {
			this.setState({
				nextDisabled: false
			});
		}
	}

	nextPage() {
		if (this.state.pageNumber == this.state.numPages - 1) {
			this.setState({
				pageNumber: this.state.pageNumber + 1,
				nextDisabled: true
			});
		} else {
			this.setState({
				pageNumber: this.state.pageNumber + 1
			});
		}
		if (this.state.prevDisabled) {
			this.setState({
				prevDisabled: false
			});
		}
	}

	render() {
		let offersList = this.state.merchant ?
			this.state.merchant.offers.map((offer) => {
				return (
					<li><button className="offer-row-button">
							<div className="offer-row">
								<div className="offer-title">{offer.offerTitle}</div>
								<div className="offer-released">{offer.validFrom}</div>
								<div className="offer-expiration">{offer.validTo}</div>
							</div>
						</button>
					</li>
				);
			}) : null;

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
					<div className="offers-list-container">
						<div className="control-bar">
							<div className="list-title">Offers</div>
							<div className="page-controls">
								<button type="button"
									disabled={this.state.prevDisabled}
									onClick={this.prevPage}>&lt;</button>
								{this.state.pageNumber} of {this.state.numPages}
								<button type="button"
									disabled={this.state.nextDisabled}
									onClick={this.nextPage}>&gt;</button>
							</div>
						</div>
						<div className="offers-list">
							<ul className="offers">
								<li>
									<div className="info-row">
										<div className="title">title</div>
										<div className="released">released</div>
										<div className="expiration">expiration</div>
									</div>
								</li>
								{offersList}
							</ul>
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
