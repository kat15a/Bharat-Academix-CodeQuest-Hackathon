package com.example.demo.service;
import com.example.demo.dto.DashboardStatsDTO;
import com.example.demo.enums.ComplaintStatus;
import com.example.demo.entity.Complaint;
import com.example.demo.enums.ComplaintStatus;
import com.example.demo.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.CategoryStatsDTO;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private ComplaintRepository complaintRepository;

    // Get all complaints
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    // Get complaint by ID
    public Complaint getComplaintById(Long complaintId) {
        return complaintRepository
                .findById(complaintId)
                .orElse(null);
    }

    // Filter by status
    public List<Complaint> getComplaintsByStatus(
            ComplaintStatus status) {

        return complaintRepository.findByStatus(status);
    }

    // Filter by category
    public List<Complaint> getComplaintsByCategory(
            String category) {

        return complaintRepository.findByCategory(category);
    }

    // Search by title
    public List<Complaint> searchComplaints(
            String keyword) {

        return complaintRepository
                .findByTitleContainingIgnoreCase(keyword);
    }

    public DashboardStatsDTO getDashboardStats() {

        long total = complaintRepository.count();

        long pending =
                complaintRepository.countByStatus(
                        ComplaintStatus.PENDING
                );

        long inProgress =
                complaintRepository.countByStatus(
                        ComplaintStatus.IN_PROGRESS
                );

        long resolved =
                complaintRepository.countByStatus(
                        ComplaintStatus.RESOLVED
                );

        return new DashboardStatsDTO(
                total,
                pending,
                inProgress,
                resolved
        );
    }

    public void deleteComplaint(Long complaintId) {
        complaintRepository.deleteById(complaintId);
    }

    public List<Complaint> getRecentComplaints() {
        return complaintRepository
                .findTop5ByOrderByCreatedAtDesc();
    }

    public List<CategoryStatsDTO>
    getCategoryStats() {

        List<Complaint> complaints =
                complaintRepository.findAll();

        Map<String, Long> map =
                new HashMap<>();

        for (Complaint complaint
                : complaints) {

            String category =
                    complaint.getCategory();

            map.put(
                    category,
                    map.getOrDefault(
                            category,
                            0L
                    ) + 1
            );
        }

        List<CategoryStatsDTO> result =
                new ArrayList<>();

        for (String category
                : map.keySet()) {

            result.add(
                    new CategoryStatsDTO(
                            category,
                            map.get(category)
                    )
            );
        }

        return result;
    }
}