package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Merchant {

    private String merchantId;
    private String merchant;
    private MerchantAddress[] merchantAddress;

    public Merchant() {
    }

    public String getMerchantId() { return merchantId; }
    public void setMerchantId(String merchantId) { this.merchantId = merchantId; }

    public String getMerchant() { return merchant; }
    public void setMerchant(String merchant) { this.merchant = merchant; }

    public MerchantAddress[] getMerchantAddress() { return merchantAddress; }
    public void setMerchantAddress(MerchantAddress[] merchantList) { this.merchantAddress = merchantList; }

    @Override
    public String toString() {
        return "{\"merchantId\": \"" + merchantId + "\","
                + "\"merchant\": \"" + merchant + "\","
                + merchantAddress[0] + "}";
    }
}