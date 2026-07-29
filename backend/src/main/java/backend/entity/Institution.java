package backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "institutions")
public class Institution extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    private String type;

    private String principal;

    private String affiliation;

    private String address;

    private String contact;

    private String email;

    private Integer establishedYear;

    private Integer students;

    private Integer staff;

    @Column(length = 5000)
    private String description;

    private String imageUrl;

}