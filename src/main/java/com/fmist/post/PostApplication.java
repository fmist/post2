package com.fmist.post;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class PostApplication {

    @Value("spring.datasource.username")
    private String username;

    @Value("spring.datasource.password")
    private String password;

    public static void main(String[] args) {
        SpringApplication.run(PostApplication.class, args);
    }

}
