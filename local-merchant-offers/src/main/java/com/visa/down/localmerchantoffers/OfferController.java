package com.visa.down.localmerchantoffers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;

import javax.net.ssl.SSLContext;
import java.io.InputStream;
import java.security.KeyStore;

@RestController
public class OfferController {

    private RestTemplate restTemplate;

    // Accept request with location and distance parameters
    @GetMapping("/offers")
    public Offers[] offers(@RequestParam(value = "origin", defaultValue = "38.889321,-77.050166") String origin,
                       @RequestParam(value = "radius", defaultValue = "10") int radius) throws Exception {

        // Query VMORC to get a list of nearby offers
        Offers[] offers = findNearbyOffers(origin, radius);

        return offers;
    }

    /**
     * Calls to VMORC API to retrieve list of offers within a target location
     *
     * @param origin - latitude and longitude of target
     * @param radius - range (in miles)
     * @return list of Offer objects
     */
    private Offers[] findNearbyOffers(String origin, int radius) throws Exception {
        // Send GET request
        String url = "https://sandbox.api.visa.com/vmorc/offers/v1/byfilter?business_segment=39&origin=" + origin + "&radius=" + radius;
        OffersResponse offersResponse = restTemplate.getForObject(url, OffersResponse.class);

        return offersResponse.getOffers();
    }

    @Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) throws Exception {
        KeyStore ks = KeyStore.getInstance("JKS");
        InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("keyAndCertBundle.jks");
        ks.load(inputStream, "password".toCharArray());

        // Load SSL certificate
        SSLContext sslContext = SSLContextBuilder
                .create()
                .loadKeyMaterial(ks, "password".toCharArray())
                .loadTrustMaterial(ks, null)
                .build();

        // Build HTTP client to add authentication
        HttpClient client = HttpClients.custom()
                .setSSLContext(sslContext)
                .build();

        // Combine SSL certification with HTTP authentication
        return this.restTemplate = builder
                .requestFactory(() -> new HttpComponentsClientHttpRequestFactory(client))
                .basicAuthentication("3V109YSKMG2EEX90J48H21peSXcSLEM0z0T9vZK_gMHn7UWtI", "PwZ715kLn01rjfEX2Tr2vwOHy5VAt")
                .build();
    }
}