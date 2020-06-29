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
			merchant: null,
			visibleOffer: null
		}

		this.setLocations = this.setLocations.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.handleOfferClick = this.handleOfferClick.bind(this);
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

	handleOfferClick(id) {
		if (this.state.visibleOffer) {
			this.setState({
				visibleOffer: null
			});
		} else {
			this.setState({
				visibleOffer: id
			});
		}
	}

	render() {
		let offersList = this.state.merchant ?
			this.state.merchant.offers.map((offer) => {
				return (
					<li><button className="offer-row-button"
							id={offer.offerId}
							hidden={offer.offerId != this.state.visibleOffer && this.state.visibleOffer}
							onClick={e => this.handleOfferClick(offer.offerId)}>
							<div className="offer-row">
								<div className="offer-title">{offer.offerTitle}</div>
								<div className="offer-released">{offer.validFrom}</div>
								<div className="offer-expiration">{offer.validTo}</div>
							</div>
						</button>
					</li>
				);
			}) : null;

		if (this.state.merchant && this.state.visibleOffer) {
			const id=this.state.visibleOffer
			var description= "asdf"
			for (const offer in this.state.merchant.offers) {
				if (this.state.merchant.offers[offer].offerId == id) {
					description = this.state.merchant.offers[offer].fullDescription
				}
			}
			offersList.push(
				<li>
					<div className="offer-description">
						{description}
					</div>
				</li>
			);
		}

		return (
			<div className="App">
		      <header className="App-header">
		        <p>Visa Small Business Rewards Platform</p>
		      </header>
				<div className="modal" hidden={!this.state.showModal}>
					<div className="modal-main">
						<div className="top-merchant">
							<button className="close-button" 
								onClick={this.closeModal}>X
							</button>
							<div className="merch-info">
								<h3>{this.state.merchant ? this.state.merchant.name : null}</h3>
								<p>{this.state.merchant ? this.state.merchant.address : null}</p>
								<p>{this.state.merchant ? this.state.merchant.categories : null}</p>
							</div>
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
					</div>
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
