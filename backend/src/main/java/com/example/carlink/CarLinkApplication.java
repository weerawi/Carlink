package com.example.carlink;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class CarLinkApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarLinkApplication.class, args);
    }

}
