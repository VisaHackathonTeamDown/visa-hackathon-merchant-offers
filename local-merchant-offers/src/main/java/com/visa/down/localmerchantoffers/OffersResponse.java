package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)
public class OffersResponse {

    private int returnedResults;
    private Offers[] offers;

    public OffersResponse() {
    }

    public int getReturnedResults() {
        return returnedResults;
    }

    public void setReturnedResults(int returnedResults) {
        this.returnedResults = returnedResults;
    }

    public Offers[] getOffers() {
        return offers;
    }

    public void setOffers(Offers[] offers) {
        this.offers = offers;
    }

    @Override
    public String toString() {
        return offers[0].toString();
    }
}