package com.example.demo.controller;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    // REGISTER
    @PostMapping("/register")
    public String register(
            @RequestBody User user) {

        User existingUser =
                userRepository.findByEmail(
                        user.getEmail()
                );

        if (existingUser != null) {
            return "Email already exists";
        }

        if (user.getRole() == null ||
                user.getRole().isEmpty()) {
            user.setRole("USER");
        }

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN
    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request) {

        User user = userRepository
                .findByEmail(
                        request.getEmail()
                );

        if (user == null ||
                !user.getPassword()
                        .equals(request.getPassword())) {

            return new AuthResponse(
                    "Invalid Credentials"
            );
        }

        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(token);
    }
}