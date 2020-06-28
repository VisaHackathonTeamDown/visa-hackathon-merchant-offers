import Offer from './Offer';

class Merchant {

	constructor(info) {
		this.name = info.merchant.name;
		this.merchantId = info.merchant.merchantId;
		this.address = info.merchant.address;
		this.location = [info.merchant.latitude, info.merchant.longitude];
		this.categories = info.categories.map((category) => {
			return category.value;
		});
		this.offers = [];
	}

	addOffer(offer) {
		this.offers.push(offer);
	}
}

export default Merchant;
