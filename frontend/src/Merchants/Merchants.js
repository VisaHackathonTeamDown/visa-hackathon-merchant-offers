import React from 'react';

import './Merchants.css'
import Merchant from './Merchant';
import Offer from './Offer';

class Merchants extends React.Component {

	categories = ["Any", "Food & Wine", "Travel", "Retail"]
	redemptionChannels = ["Any", "In Store / Offline", "Online /Web/eCommerce"]
	paymentTypes = ["Any", "Credit", "Debit", "Pre-Paid", "Visa PayWave"]

	constructor(props) {
		super(props);
		this.state = {
			category: '',
			redemptionChannel: '',
			paymentType: '',
			merchants: {},
			tags: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	addTags() {
		const tempTags = [];
		if (this.state.category) {
			tempTags.push(this.state.category);
		}
		if (this.state.redemptionChannel) {
			tempTags.push(this.state.redemptionChannel);
		}
		if (this.state.paymentType) {
			tempTags.push(this.state.paymentType);
		}
		this.setState({
			tags: tempTags
		});
	}

	filterByCategory(categories) {
		return !this.state.category || (this.state.category && categories.includes(this.state.category));
	}

	filterByRedemptionChannel(redemptionChannels) {
		return !this.state.redemptionChannel || (this.state.redemptionChannel && redemptionChannels.includes(this.state.redemptionChannel));
	}

	filterByPaymentType(paymentTypes) {
		return !this.state.paymentType || (this.state.paymentType && paymentTypes.includes(this.state.paymentType));
	}

	filterOffer(criteria) {
		const byCategory = this.filterByCategory(criteria.categories);
		const byRedemptionChannel = this.filterByRedemptionChannel(criteria.redemptionChannels);
		const byPaymentType = this.filterByPaymentType(criteria.paymentTypes);
		return (!this.state.category && !this.state.redemptionChannel && !this.state.paymentType) ||
			(byCategory && byRedemptionChannel && byPaymentType);
	}

	setLocations() {
		let locations = [];
		let index = 1;
		for (const merchant in this.state.merchants) {
			locations.push(this.state.merchants[merchant]);
			this.state.merchants[merchant].marker = index;
			index += 1;
		}
		this.props.setLocations(locations);
	}

	handleSubmit(event) {
		event.preventDefault();
		let searchCenter = this.props.center ? "?origin=" + this.props.center[0] + "," + this.props.center[1] : "";
		fetch("http://visahackathonlocaloffers-env.eba-4kqxvu3x.us-east-2.elasticbeanstalk.com/offers" + searchCenter)
			.then(res => res.json())
			.then(
				(result) => {
					let tempMerchants = {};
					result.forEach((info) => {
						let criteria = {
							categories: info.categories.map((category) => {
								return category.value;
							}),
							redemptionChannels: info.redemptionChannels,
							paymentTypes: info.cardPaymentTypes
						};
						const merchantId = info.merchant.merchantId;
						if (this.filterOffer(criteria)) {
							if (!tempMerchants[merchantId]) {
								tempMerchants[merchantId] = new Merchant(info);
							}
							tempMerchants[merchantId].addOffer(new Offer(info));
						}
					});
					this.setState({
						merchants: tempMerchants
					});
					this.addTags();
					this.setLocations();
				},
				(error) => {
					window.alert("error fetching offers");
				}
			);
	}

	render() {
		let merchantsList = [];
		for (const merchant in this.state.merchants) {
			merchantsList.push(
				<li>
					<div className="merchant-row">
						<div className="merchant-info">
							<h3>{this.state.merchants[merchant].marker}. {this.state.merchants[merchant].name}</h3>
							<p>{this.state.merchants[merchant].address}</p>
							<p>{this.state.merchants[merchant].categories}</p>
						</div>
						<button className="offers-button" 
							id={this.state.merchants[merchant].merchantId} 
							type="button" 
							onClick={e => this.props.openModal(this.state.merchants[e.target.id])}>
								Offers
						</button>
					</div>
				</li>
			);
		}

		let filterTags = this.state.tags.map((tag) => {
			return (
				<li>
					<div className="filter-tag">
						{tag}
					</div>
				</li>
			);
		});

		let categoriesList = this.categories.map((category) => {
			return (
				<option value={category == "Any" ? "" : category}>{category}</option>
			);
		});

		let redemptionChannelsList = this.redemptionChannels.map((channel) => {
			return (
				<option value={channel == "Any" ? "" : channel}>{channel}</option>
			);
		});

		let paymentTypesList = this.paymentTypes.map((type) => {
			return (
				<option value={type == "Any" ? "" : type}>{type}</option>
			);
		});

		return (
			<div className="merchants-container">
				<div className="filter-container">
					<div className="form-container">
						<form onSubmit={this.handleSubmit}>
							<div className="criteria">
								<select name="category" onChange={this.handleChange}>
									<optgroup label="Categories">
										{categoriesList}
									</optgroup>
								</select>
								<select name="redemptionChannel" onChange={this.handleChange}>
									<optgroup label="Redemption Channels">
										{redemptionChannelsList}
									</optgroup>
								</select>
								<select name="paymentType" onChange={this.handleChange}>
									<optgroup label="Payment Types">
										{paymentTypesList}
									</optgroup>
								</select>
							</div>
							<input className="search-button" type="submit" value="Search" />
						</form>
					</div>
					<div className="tags-container">
						<ul className="tags-list">{filterTags}</ul>
					</div>
				</div>
				<div className="list-container">
					<ul className="merchants-list">{merchantsList}</ul>
					<div hidden={merchantsList.length}>There are no local businesses that match your criteria.</div>
				</div>
			</div>
		);
	}
}

export default Merchants;
