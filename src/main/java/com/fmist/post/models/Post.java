package com.fmist.post.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Post {
    LocalDateTime timeCreated;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "Title can't be empty")
    private String title;
    @NotNull(message = "Text can't be empty")
    private String text;

    @PrePersist
    @PreUpdate
    public void getDateTimeCreated() {
        timeCreated = LocalDateTime.now();
    }

    public String getTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yy HH:mm:ss");
        return formatter.format(timeCreated);
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
