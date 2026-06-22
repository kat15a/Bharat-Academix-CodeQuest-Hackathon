package com.example.demo.dto;

public class DashboardStatsDTO {

    private long total;
    private long pending;
    private long inProgress;
    private long resolved;

    // No-Argument Constructor
    public DashboardStatsDTO() {
    }

    // All-Argument Constructor
    public DashboardStatsDTO(
            long total,
            long pending,
            long inProgress,
            long resolved) {
        this.total = total;
        this.pending = pending;
        this.inProgress = inProgress;
        this.resolved = resolved;
    }

    // Getters and Setters

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public long getPending() {
        return pending;
    }

    public void setPending(long pending) {
        this.pending = pending;
    }

    public long getInProgress() {
        return inProgress;
    }

    public void setInProgress(long inProgress) {
        this.inProgress = inProgress;
    }

    public long getResolved() {
        return resolved;
    }

    public void setResolved(long resolved) {
        this.resolved = resolved;
    }
}