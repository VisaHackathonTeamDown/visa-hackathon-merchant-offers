package com.visa.down.localmerchantoffers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Description {

    //private String richText;
    private String text;

    public Description() {
    }

    //public String getRichText() { return richText; }
    //public void setRichText(String richText) { this.richText = richText; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }


    @Override
    public String toString() {
        //return "{\"richText\": \"" + richText + "\","
        //        + "\"text\": \"" + text + "\"}";
        return text;
    }
}