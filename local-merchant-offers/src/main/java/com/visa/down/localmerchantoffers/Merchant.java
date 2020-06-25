package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Merchant {

    private String merchantId;
    private String name;
    private String address;
    private String latitude;
    private String longitude;
    private MerchantAddress[] merchantAddress;

    public Merchant() {
    }

    public String getMerchantId() { return merchantId; }
    public void setMerchantId(String merchantId) { this.merchantId = merchantId; }

    public String getName() { return name; }
    public void setMerchant(String merchant) { this.name = merchant; }

    // Don't want to return MerchantAddress in response
    //public MerchantAddress[] getMerchantAddress() { return merchantAddress; }
    public void setMerchantAddress(MerchantAddress[] merchantList) {
        this.merchantAddress = merchantList;
        MerchantAddress addressInfo = this.merchantAddress[0];

        setAddress(addressInfo);
        setLatitude(addressInfo);
        setLongitude(addressInfo);
    }

    public String getAddress() { return address; }
    public void setAddress(MerchantAddress addressInfo) { this.address = addressInfo.getAddress1() + " " +
            addressInfo.getAddress2() + ", " + addressInfo.getCity() + ", " + addressInfo.getState() + " " + addressInfo.getPostalCode(); }

    public String getLatitude() { return latitude; }
    public void setLatitude(MerchantAddress addressInfo) { this.latitude = addressInfo.getLatitude(); }

    public String getLongitude() { return longitude; }
    public void setLongitude(MerchantAddress addressInfo) { this.longitude = addressInfo.getLongitude(); }

    @Override
    public String toString() {
        return "{\"merchantId\": \"" + merchantId + "\","
                + "\"merchant\": \"" + name + "\","
                + merchantAddress[0] + "}";
    }
}