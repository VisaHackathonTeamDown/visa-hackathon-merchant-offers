package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Offers {

    private String offerId;
    private String offerTitle;
    private Merchant[] merchant;
    private String activeIndicator;
    private String validityFromDateTime;
    private String validityToDateTime;
    private RedemptionChannel[] redemptionChannelList;
    private String[] redemptionChannels;
    private Description offerShortDescription;
    private Description offerCopy;
    private CardPaymentType[] cardPaymentTypeList;
    private String[] cardPaymentTypes;
    private Category[] categorySubcategoryList;

    public Offers() {
    }

    public String getOfferId() { return offerId; }
    public void setOfferId(String offerId) { this.offerId = offerId; }

    public String getOfferTitle() { return offerTitle; }
    public void setOfferTitle(String offerTitle) { this.offerTitle = offerTitle; }

    public Merchant getMerchant() { return merchant[0]; }
    public void setMerchantList(Merchant[] merchantList) { this.merchant = merchantList; }

    public String getActiveIndicator() { return activeIndicator; }
    public void setActiveStatus(String activeIndicator) { this.activeIndicator = activeIndicator; }

    public String getValidityFromDateTime() { return validityFromDateTime; }
    public void setValidityFromDateTime(String validityFromDateTime) { this.validityFromDateTime = validityFromDateTime; }

    public String getValidityToDateTime() { return validityToDateTime; }
    public void setValidityToDateTime(String validityToDateTime) { this.validityToDateTime = validityToDateTime; }

    public String[] getRedemptionChannels() { return redemptionChannels; }
    public void setRedemptionChannelList(RedemptionChannel[] redemptionChannelList) {
        this.redemptionChannelList = redemptionChannelList;

        List<String> channels = new ArrayList<>();
        for (RedemptionChannel r: redemptionChannelList)
            channels.add(r.getValue());
        redemptionChannels = new String[channels.size()];
        redemptionChannels = channels.toArray(redemptionChannels);
    }

    public String getShortDescription() { return offerShortDescription.getText(); }
    public void setOfferShortDescription(Description offerShortDescription) { this.offerShortDescription = offerShortDescription; }

    public String getFullDescription() { return offerCopy.getText(); }
    public void setOfferCopy(Description offerCopy) { this.offerCopy = offerCopy; }

    public String[] getCardPaymentTypes() { return cardPaymentTypes; }
    public void setCardPaymentTypeList(CardPaymentType[] cardPaymentTypeList) {
        this.cardPaymentTypeList = cardPaymentTypeList;

        List<String> types = new ArrayList<>();
        for (CardPaymentType t: cardPaymentTypeList)
            types.add(t.getValue());
        cardPaymentTypes = new String[types.size()];
        cardPaymentTypes = types.toArray(cardPaymentTypes);
    }

    public Category[] getCategories() { return categorySubcategoryList; }
    public void setCategorySubcategoryList(Category[] categorySubcategoryList) { this.categorySubcategoryList = categorySubcategoryList; }

    @Override
    public String toString() {
        return "{\"offerId\": \"" + offerId + "\","
                + "\"offerTitle\": \"" + offerTitle + "\","
                + "\"merchant\": " + merchant[0] + ","
                + "\"active\": \"" + activeIndicator + "\","
                + "\"validityFrom\": \"" + validityFromDateTime + "\","
                + "\"validityTo\": \"" + validityToDateTime + "\","
                + "\"redemptionChannels\": " + Arrays.toString(redemptionChannelList) + ","
                + "\"shortDescription\": \"" + offerShortDescription + "\","
                + "\"longDescription\": \"" + offerCopy + "\","
                + "\"cardPaymentTypes\": " + Arrays.toString(cardPaymentTypeList) + ","
                + "\"categories\": " + Arrays.toString(categorySubcategoryList) + "}";
    }
}