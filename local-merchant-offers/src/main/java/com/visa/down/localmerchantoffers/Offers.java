package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Offers {

    private String offerTitle;

    public Offers() {
    }

    public String getOfferTitle() {
        return offerTitle;
    }

    public void setOfferTitle(String offerTitle) {
        this.offerTitle = offerTitle;
    }

    @Override
    public String toString() {
        return "{\"offerTitle\": \"" + offerTitle + "\"}";
    }
}