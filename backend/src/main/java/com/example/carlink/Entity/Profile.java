package com.example.carlink.Entity;

import org.springframework.security.core.GrantedAuthority;
import com.example.carlink.Dto.UserDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;

    private String email;
    private String name;

    @Column(name = "userName")
    private String username;
    private String password;




    private String ProfileImageUri;

    private String bio;
    private String gender;

    @Embedded
    @ElementCollection
    private Set<UserDto> follower = new HashSet<UserDto>();

    @Embedded
    @ElementCollection
    private Set<UserDto> following = new HashSet<UserDto>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Story> stories = new ArrayList<Story>();


    @ManyToMany
    private List<Post> Savedposts = new ArrayList<Post>();

    public Profile(String email, String password, List<GrantedAuthority> authorities) {
        // Constructor implementation
    }







}
