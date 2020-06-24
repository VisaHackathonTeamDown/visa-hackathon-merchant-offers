package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class MerchantAddress {

    private String address1;
    private String address2;
    private String city;
    private String state;
    private String postalCode;
    private String countryName;
    private String latitude;
    private String longitude;

    public MerchantAddress() {
    }

    public String getAddress1() { return address1; }
    public void setAddress1(String address1) { this.address1 = address1; }

    public String getAddress2() { return address2; }
    public void setAddress2(String address2) { this.address2 = address2; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }

    public String getCountryName() { return countryName; }
    public void setCountryName(String countryName) { this.countryName = countryName; }

    public String getLatitude() { return latitude; }
    public void setLatitude(String latitude) { this.latitude = latitude; }

    public String getLongitude() { return longitude; }
    public void setLongitude(String longitude) { this.longitude = longitude; }

    @Override
    public String toString() {
        return "\"address\": \"" + address1 + " " + address2 + ", " + city + ", " + state + " " + postalCode + "\","
                + "\"latitude\": \"" + latitude + "\","
                + "\"longitude\": \"" + longitude + "\"";
    }
}