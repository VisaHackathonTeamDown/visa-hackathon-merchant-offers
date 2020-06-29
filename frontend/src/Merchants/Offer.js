class Offer {

	constructor(info) {
		this.offerId = info.offerId;
		this.offerTitle = info.offerTitle;
		this.activeIndicator = info.activeIndicator;
		this.shortDescription = info.shortDescription;
		this.fullDescription = info.fullDescription;
		this.redemptionChannels = info.redemptionChannels;
		this.cardPaymentTypes = info.cardPaymentTypes;
		this.validFrom = info.validityFromDateTime.substring(0, info.validityFromDateTime.indexOf(":") - 2);
		this.validTo = info.validityToDateTime.substring(0, info.validityToDateTime.indexOf(":") - 2);
	}
}

export default Offer;
