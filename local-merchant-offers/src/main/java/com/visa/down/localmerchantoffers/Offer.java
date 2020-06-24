package com.visa.down.localmerchantoffers;

public class Offer {

    private final int offerId;
    private final int merchantId;
    private final String merchantName;

    public Offer(int offerId, int merchantId, String merchantName) {
        this.offerId = offerId;
        this.merchantId = merchantId;
        this.merchantName = merchantName;
    }

    public int getOfferId() {
        return offerId;
    }

    public int getMerchantId() {
        return merchantId;
    }

    public String getMerchantName() {
        return merchantName;
    }
}
