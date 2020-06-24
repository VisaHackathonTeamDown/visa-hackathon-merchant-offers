package com.visa.down.localmerchantoffers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OfferController {

    private final int offerId = 102358;
    private final int merchantId = 101459;
    private final String merchantName = "Merchant Four";

    @GetMapping("/offer")
    public Offer offer(@RequestParam(value = "offerId", defaultValue = "102358") int offerId) {
        return new Offer(offerId, merchantId, merchantName);
    }
}