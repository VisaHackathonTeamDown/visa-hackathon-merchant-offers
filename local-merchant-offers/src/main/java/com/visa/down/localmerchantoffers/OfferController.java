package com.visa.down.localmerchantoffers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.util.ResourceUtils;

import javax.net.ssl.SSLContext;

import java.util.List;
import java.util.ArrayList;

@RestController
public class OfferController {

    List<Offer> offers;
    String origin;
    int radius;

    // Accept request with location and distance parameters
    @GetMapping("/offers")
    public List<Offer> offers(@RequestParam(value = "origin", defaultValue = "San Jose") String origin,
                       @RequestParam(value = "radius", defaultValue = "10") int radius) {

        // Query VMORC to get a list of nearby offers
        this.origin = origin;
        this.radius = radius;

        // Return list of offers for nearby small merchants
        return offers;
    }

    @Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) throws Exception {
        // Load SSL certificate
        SSLContext sslContext = SSLContextBuilder
                .create()
                .loadKeyMaterial(ResourceUtils.getFile("src/main/resources/keyAndCertBundle.jks"), "password".toCharArray(), "password".toCharArray())
                .loadTrustMaterial(ResourceUtils.getFile("src/main/resources/keyAndCertBundle.jks"), "password".toCharArray())
                .build();

        // Build HTTP client to add authentication
        HttpClient client = HttpClients.custom()
                .setSSLContext(sslContext)
                .build();

        // Combine SSL certification with HTTP authentication
        return builder
                .requestFactory(() -> new HttpComponentsClientHttpRequestFactory(client))
                .basicAuthentication("3V109YSKMG2EEX90J48H21peSXcSLEM0z0T9vZK_gMHn7UWtI", "PwZ715kLn01rjfEX2Tr2vwOHy5VAt")
                .build();
    }
    
    @Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
            offers = new ArrayList<>();
            // Send GET request
            OffersResponse offersList = restTemplate.getForObject("https://sandbox.api.visa.com/vmorc/offers/v1/byfilter?business_segment=39", OffersResponse.class);
            JSONObject offersObject = new JSONObject(offersList.toString());
            offers.add(new Offer(5, 5, offersObject.get("offerTitle").toString()));
        };
    }
}