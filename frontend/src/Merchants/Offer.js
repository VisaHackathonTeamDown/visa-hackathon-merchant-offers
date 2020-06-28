class Offer {

	constructor(info) {
		this.offerId = info.offerId;
		this.offerTitle = info.offerTitle;
		this.activeIndicator = info.activeIndicator;
		this.shortDescription = info.shortDescription;
		this.fullDescription = info.fullDescription;
		this.redemptionChannels = info.redemptionChannels;
		this.validFrom = info.validityFromDateTime;
		this.validTo = info.validityToDateTime;
		this.cardPaymentTypes = info.cardPaymentTypes;
	}
}

export default Offer;
