import React from 'react';

import './Merchants.css'
import Merchant from './Merchant';
import Offers from './Offers/Offers';

class Merchants extends React.Component {

	merchants = [1, 2, 3, 4];
	tags = [1, 2, 3];

	constructor(props) {
		super(props);
		this.state = {
			category: '',
			redemptionChannel: '',
			paymentType: '',
			showOffers: true,
			offers: [1, 2, 3, 4]
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openOffers = this.openOffers.bind(this);
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);

		this.setDummyData();
	}

	setDummyData() {
		this.merchants = this.merchants.map((merchant) =>
			<li>
				<div className="merchant-row">
					<div className="merchant-info">
						<h3>Merchant {merchant}</h3>
						<p>Merchant {merchant}'s address</p>
						<p>Merchant {merchant}'s type</p>
					</div>
					<button className="offers-button" type="button" onClick={this.props.openModal}>Offers</button>
				</div>
			</li>);
		this.tags = this.tags.map((tag) =>
			<li>
				<div className="filter-tag">
					filter {tag}
				</div>
			</li>);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch("http://visahackathonlocaloffers-env.eba-4kqxvu3x.us-east-2.elasticbeanstalk.com/offers")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						merchants: result.items
					});
				},
				(error) => {
					window.alert("error");
				}
			);
	}

	showModal() {
		this.setState({
			showOffers: true
		});
	}

	closeModal() {
		this.setState({
			showOffers: false
		});
	}

	openOffers(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="merchants-container">
				<div className="filter-container">
					<div className="form-container">
						<form onSubmit={this.handleSubmit}>
							<div className="criteria">
								<select name="category" onChange={this.handleChange}>
									<option value="option1">Option1</option>
								</select>
								<select name="redemptionChannel" onChange={this.handleChange}>
									<option value="option2">Option2</option>
								</select>
								<select name="paymentType" onChange={this.handleChange}>
									<option value="option3">Option3</option>
								</select>
							</div>
							<input className="search-button" type="submit" value="Search" />
						</form>
					</div>
					<div className="tags-container">
						<ul className="tags-list">{this.tags}</ul>
					</div>
				</div>
				<div className="list-container">
					<ul className="merchants-list">{this.merchants}</ul>
				</div>
			</div>
		);
	}
}

export default Merchants;
