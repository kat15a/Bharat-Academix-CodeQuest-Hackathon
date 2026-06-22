package com.example.demo.service;

import com.example.demo.dto.ComplaintRequest;
import com.example.demo.entity.Complaint;
import com.example.demo.entity.User;
import com.example.demo.enums.ComplaintStatus;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private UserRepository userRepository;

    // Create complaint without image
    public Complaint addComplaint(Long userId,
                                  ComplaintRequest request) {

        User user = userRepository
                .findById(userId)
                .orElse(null);

        if (user == null) {
            return null;
        }

        Complaint complaint = new Complaint();

        complaint.setTitle(request.getTitle());
        complaint.setDescription(request.getDescription());
        complaint.setCategory(request.getCategory());

        complaint.setAddress(request.getAddress());
        complaint.setLatitude(request.getLatitude());
        complaint.setLongitude(request.getLongitude());

        complaint.setStatus(ComplaintStatus.PENDING);
        complaint.setUser(user);
        complaint.setCreatedAt(LocalDateTime.now());
        complaint.setUpdatedAt(LocalDateTime.now());

        return complaintRepository.save(complaint);
    }

    // Create complaint with image
    public Complaint addComplaint(Long userId,
                                  ComplaintRequest request,
                                  MultipartFile imageFile)
            throws IOException {

        User user = userRepository
                .findById(userId)
                .orElse(null);

        if (user == null) {
            return null;
        }

        Complaint complaint = new Complaint();

        complaint.setTitle(request.getTitle());
        complaint.setDescription(request.getDescription());
        complaint.setCategory(request.getCategory());

        complaint.setAddress(request.getAddress());
        complaint.setLatitude(request.getLatitude());
        complaint.setLongitude(request.getLongitude());

        complaint.setStatus(ComplaintStatus.PENDING);
        complaint.setUser(user);


        complaint.setImageName(imageFile.getOriginalFilename());
        complaint.setImageType(imageFile.getContentType());
        complaint.setImageData(imageFile.getBytes());

        complaint.setCreatedAt(LocalDateTime.now());
        complaint.setUpdatedAt(LocalDateTime.now());

        return complaintRepository.save(complaint);
    }

    // Get all complaints of a user
    public List<Complaint> getComplaintsByUserId(Long userId) {

        User user = userRepository
                .findById(userId)
                .orElse(null);

        if (user == null) {
            return null;
        }

        return complaintRepository.findByUser(user);
    }

    // Update complaint status
    public Complaint updateStatus(Long complaintId,
                                  ComplaintStatus status) {

        Complaint complaint = complaintRepository
                .findById(complaintId)
                .orElse(null);

        if (complaint == null) {
            return null;
        }

        complaint.setStatus(status);

        return complaintRepository.save(complaint);
    }
}