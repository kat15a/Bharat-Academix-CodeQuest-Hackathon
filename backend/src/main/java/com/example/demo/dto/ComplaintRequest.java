package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ComplaintRequest {

    @NotBlank(message = "Title cannot be empty")
    @Size(min = 5, max = 100,
            message = "Title must be between 5 and 100 characters")
    private String title;

    @NotBlank(message = "Description cannot be empty")
    @Size(min = 10, max = 500,
            message = "Description must be between 10 and 500 characters")
    private String description;

    @NotBlank(message = "Category cannot be empty")
    private String category;

    private String address;

    private Double latitude;

    private Double longitude;

    // No-Argument Constructor
    public ComplaintRequest() {
    }

    // All-Argument Constructor
    public ComplaintRequest(String title,
                            String description,
                            String category,
                            String address,
                            Double latitude,
                            Double longitude) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}