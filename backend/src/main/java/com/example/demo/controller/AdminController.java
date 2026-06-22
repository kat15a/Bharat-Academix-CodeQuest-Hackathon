package com.example.demo.controller;

import com.example.demo.entity.Complaint;
import com.example.demo.enums.ComplaintStatus;
import com.example.demo.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.dto.CategoryStatsDTO;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Get all complaints
    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
        return adminService.getAllComplaints();
    }

    // Get complaint by ID
    @GetMapping("/complaints/{complaintId}")
    public Complaint getComplaintById(
            @PathVariable Long complaintId) {

        return adminService.getComplaintById(
                complaintId
        );
    }

    // Filter by status
    @GetMapping("/complaints/status/{status}")
    public List<Complaint> getComplaintsByStatus(
            @PathVariable ComplaintStatus status) {

        return adminService
                .getComplaintsByStatus(status);
    }

    // Filter by category
    @GetMapping("/complaints/category/{category}")
    public List<Complaint> getComplaintsByCategory(
            @PathVariable String category) {

        return adminService
                .getComplaintsByCategory(category);
    }

    // Search complaints by title
    @GetMapping("/search")
    public List<Complaint> searchComplaints(
            @RequestParam String keyword) {

        return adminService
                .searchComplaints(keyword);
    }

    @DeleteMapping("/complaints/{complaintId}")
    public String deleteComplaint(
            @PathVariable Long complaintId) {

        adminService.deleteComplaint(complaintId);

        return "Complaint deleted successfully";
    }

    @GetMapping("/recent")
    public List<Complaint> getRecentComplaints() {
        return adminService.getRecentComplaints();
    }

    @GetMapping("/category-stats")
    public List<CategoryStatsDTO>
    getCategoryStats() {
        return adminService
                .getCategoryStats();
    }
    
}