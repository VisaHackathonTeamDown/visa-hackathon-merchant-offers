package com.visa.down.localmerchantoffers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

@RestController
public class OfferController {

    // Accept request with location and distance parameters
    @GetMapping("/offers")
    public List<Offer> offers(@RequestParam(value = "origin", defaultValue = "San Jose") String origin,
                       @RequestParam(value = "radius", defaultValue = "10") int radius) {

        // Query VMORC to get a list of nearby offers
        List<Offer> offers = findNearbyOffers(origin, radius);

        // Iterate through each offer to filter
        ListIterator<Offer> iter = offers.listIterator();
        while (iter.hasNext()) {
            Offer offer = iter.next();
            // Remove large merchants
            if (isLargeMerchant(offer.getMerchantName()))
                iter.remove();
        }

        // Return list of offers for nearby small merchants
        return offers;
    }

    /**
     * Calls to VMORC API to retrieve list of offers within a target location
     *
     * @param origin - latitude and longitude of target
     * @param radius - range (in miles)
     * @return list of Offer objects
     */
    private List<Offer> findNearbyOffers(String origin, int radius) {
        List <Offer> offers = new ArrayList<Offer>();

        // Need to add API call implementation

        offers.add(new Offer(102358, 101459, "Merchant Four"));
        offers.add(new Offer(101586, 105976, "Merchant Two"));
        offers.add(new Offer(105832, 103574, "Merchant Three"));

        return offers;
    }

    /**
     * Calls to ____ API to determine if merchant is small or large
     * @param merchant - name of the merchant
     * @return true if merchant is large
     */
    private boolean isLargeMerchant(String merchant) {

        // Need to add API call implementation

        if (merchant.equals("Merchant Two"))
            return true;
        return false;
    }
}