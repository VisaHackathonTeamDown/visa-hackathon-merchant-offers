package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Offers {

    private String offerId;
    private String offerTitle;
    private String activeIndicator;
    private String validityFromDateTime;
    private String validityToDateTime;
    private RedemptionChannel[] redemptionChannelList;
    private Description offerShortDescription;
    private Description offerCopy;
    private CardPaymentType[] cardPaymentTypeList;
    private Category[] categorySubcategoryList;
    private Merchant[] merchantList;

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

    public RedemptionChannel[] getRedemptionChannelList() { return redemptionChannelList; }
    public void setRedemptionChannelList(RedemptionChannel[] redemptionChannelList) { this.redemptionChannelList = redemptionChannelList; }

    public Description getOfferShortDescription() { return offerShortDescription; }
    public void setOfferShortDescription(Description offerShortDescription) { this.offerShortDescription = offerShortDescription; }

    public Description getOfferCopy() { return offerCopy; }
    public void setOfferCopy(Description offerCopy) { this.offerCopy = offerCopy; }

    public CardPaymentType[] getCardPaymentTypeList() { return cardPaymentTypeList; }
    public void setCardPaymentTypeList(CardPaymentType[] cardPaymentTypeList) { this.cardPaymentTypeList = cardPaymentTypeList; }

    public Category[] getCategorySubcategoryList() { return categorySubcategoryList; }
    public void setCategorySubcategoryList(Category[] categorySubcategoryList) { this.categorySubcategoryList = categorySubcategoryList; }

    public Merchant[] getMerchantList() { return merchantList; }
    public void setMerchantList(Merchant[] merchantList) { this.merchantList = merchantList; }

    @Override
    public String toString() {
        return "{\"offerId\": \"" + offerId + "\","
                + "\"offerTitle\": \"" + offerTitle + "\","
                + "\"active\": \"" + activeIndicator + "\","
                + "\"validityFrom\": \"" + validityFromDateTime + "\","
                + "\"validityTo\": \"" + validityToDateTime + "\","
                + "\"redemptionChannels\": " + Arrays.toString(redemptionChannelList) + ","
                + "\"shortDescription\": " + offerShortDescription + ","
                + "\"longDescription\": " + offerCopy + ","
                + "\"cardPaymentTypes\": " + Arrays.toString(cardPaymentTypeList) + ","
                + "\"categories\": " + Arrays.toString(categorySubcategoryList) + ","
                + "\"merchant\": " + merchantList[0] + "}";
    }
}