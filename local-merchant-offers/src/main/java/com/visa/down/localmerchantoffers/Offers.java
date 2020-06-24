package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Offers {

    private String offerId;
    private String offerTitle;
    private String activeIndicator;
    private String validityFromDateTime;
    private String validityToDateTime;

    public Offers() {
    }

    public String getOfferId() { return offerId; }
    public void setOfferId(String offerId) { this.offerId = offerId; }

    public String getOfferTitle() { return offerTitle; }
    public void setOfferTitle(String offerTitle) { this.offerTitle = offerTitle; }

    public String getActiveIndicator() { return activeIndicator; }
    public void setActiveStatus(String activeIndicator) { this.activeIndicator = activeIndicator; }

    public String getValidityFromDateTime() { return validityFromDateTime; }
    public void setValidityFromDateTime(String validityFromDateTime) { this.validityFromDateTime = validityFromDateTime; }

    public String getValidityToDateTime() { return validityToDateTime; }
    public void setValidityToDateTime(String validityToDateTime) { this.validityToDateTime = validityToDateTime; }

    @Override
    public String toString() {
        return "{\"offerId\": \"" + offerId + "\","
                + "\"offerTitle\": \"" + offerTitle + "\","
                + "\"active\": \"" + activeIndicator + "\","
                + "\"validityFrom\": \"" + validityFromDateTime + "\","
                + "\"validityTo\": \"" + validityToDateTime + "\"}";
    }
}