package com.example.demo.repository;

import com.example.demo.entity.Complaint;
import com.example.demo.entity.User;
import com.example.demo.enums.ComplaintStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintRepository
        extends JpaRepository<Complaint, Long> {

    List<Complaint> findByUser(User user);

    List<Complaint> findByStatus(
            ComplaintStatus status);

    long countByStatus(
            ComplaintStatus status);

    List<Complaint> findByCategory(
            String category);

    List<Complaint> findByTitleContainingIgnoreCase(
            String keyword);
    List<Complaint> findTop5ByOrderByCreatedAtDesc();
}