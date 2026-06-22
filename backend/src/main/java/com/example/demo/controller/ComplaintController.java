package com.example.demo.controller;

import com.example.demo.dto.ComplaintRequest;
import com.example.demo.entity.Complaint;
import com.example.demo.enums.ComplaintStatus;
import com.example.demo.service.ComplaintService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/complaints")
public class ComplaintController {

    @Autowired
    private ComplaintService service;

    // Create complaint without image
    @PostMapping("/user/{userId}")
    public Complaint addComplaint(
            @PathVariable Long userId,
            @Valid @RequestBody ComplaintRequest request) {

        return service.addComplaint(userId, request);
    }

    // Create complaint with image
    @PostMapping("/user/{userId}/upload")
    public Complaint addComplaintWithImage(
            @PathVariable Long userId,
            @RequestPart ComplaintRequest request,
            @RequestPart MultipartFile imageFile)
            throws IOException {

        return service.addComplaint(
                userId,
                request,
                imageFile
        );
    }

    // Get all complaints of a user
    @GetMapping("/user/{userId}")
    public List<Complaint> getComplaintsByUserId(
            @PathVariable Long userId) {

        return service.getComplaintsByUserId(userId);
    }

    // Update complaint status
    @PatchMapping("/{complaintId}/status")
    public Complaint updateStatus(
            @PathVariable Long complaintId,
            @RequestParam ComplaintStatus status) {

        return service.updateStatus(complaintId, status);
    }
}