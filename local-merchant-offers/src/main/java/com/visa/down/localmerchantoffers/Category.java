package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Category {

    private String key;
    private String value;
    private Subcategory[] subcategories;

    public Category() {
    }

    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }

    public Subcategory[] getSubcategories() { return subcategories; }
    public void setSubcategories(Subcategory[] subcategories) { this.subcategories = subcategories; }

    @Override
    public String toString() {
        return "{\"key\": \"" + key + "\","
                + "\"category\": \"" + value + "\","
                + "\"subcategories\": " + Arrays.toString(subcategories) + "}";
    }
}