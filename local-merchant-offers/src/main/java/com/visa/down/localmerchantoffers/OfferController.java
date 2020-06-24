package com.visa.down.localmerchantoffers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.util.ResourceUtils;

import javax.net.ssl.SSLContext;

@RestController
public class OfferController {

    private final int offerId = 102358;
    private final int merchantId = 101459;
    private String merchantName = "Merchant Four";

    @GetMapping("/offer")
    public Offer offer(@RequestParam(value = "offerId", defaultValue = "102358") int offerId) {
        return new Offer(offerId, merchantId, merchantName);
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
            // Send GET request
            OffersResponse offers = restTemplate.getForObject("https://sandbox.api.visa.com/vmorc/offers/v1/byfilter?business_segment=39", OffersResponse.class);
            merchantName = offers.toString();
        };
    }
}