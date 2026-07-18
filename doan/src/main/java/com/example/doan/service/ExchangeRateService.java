package com.example.doan.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@Service
public class ExchangeRateService {
    private static final String API_URL = "https://open.er-api.com/v6/latest/VND";
    private static final Duration CACHE_DURATION = Duration.ofHours(12);

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final HttpClient httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5))
            .build();

    private Map<String, Double> cachedRates = null;
    private Instant lastFetchTime = null;

    public synchronized Map<String, Double> getRates() {
        if (cachedRates == null || lastFetchTime == null || 
                Instant.now().isAfter(lastFetchTime.plus(CACHE_DURATION))) {
            fetchRates();
        }
        return cachedRates;
    }

    private void fetchRates() {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(API_URL))
                    .timeout(Duration.ofSeconds(5))
                    .GET()
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                JsonNode root = objectMapper.readTree(response.body());
                if ("success".equalsIgnoreCase(root.path("result").asText())) {
                    JsonNode ratesNode = root.path("rates");
                    Map<String, Double> rates = new HashMap<>();
                    ratesNode.fields().forEachRemaining(entry -> {
                        rates.put(entry.getKey(), entry.getValue().asDouble());
                    });
                    
                    if (rates.containsKey("USD") && rates.containsKey("EUR")) {
                        this.cachedRates = rates;
                        this.lastFetchTime = Instant.now();
                        return;
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Failed to fetch exchange rates: " + e.getMessage());
        }

        if (this.cachedRates == null) {
            Map<String, Double> fallback = new HashMap<>();
            fallback.put("VND", 1.0);
            fallback.put("USD", 0.00003937); // ~25400 VND/USD
            fallback.put("EUR", 0.00003636); // ~27500 VND/EUR
            this.cachedRates = fallback;
            this.lastFetchTime = Instant.now();
        }
    }
}
