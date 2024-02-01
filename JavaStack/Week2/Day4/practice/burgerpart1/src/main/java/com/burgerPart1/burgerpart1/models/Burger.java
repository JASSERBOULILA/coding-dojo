package com.burgerPart1.burgerpart1.models;

import java.util.Date;

import jakarta.validation.constraints.*;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "Burgers")
public class Burger {
    // members variables ;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(min = 5 , max =200 , message = "The Burger Name Must Be not Blank")
    private String burgerName;
    @NotBlank
    @Size(min = 5 , max=200 , message = "The Restaurant Name Must Be Not Blank")
    private String restaurantName ;

    @NotNull
    @Min(value = 0 , message = "Should Be Between 0 and 10")
    @Max(value = 10)
    private Integer rating ;


    @NotBlank
    @Size(min = 5, max = 300 , message = "The Notes Must Be Not Blank")
    private String notes ;


    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    public void setId(Long id) {
        this.id = id;
    }


    public Burger(){
    }

    public Burger(Long id , String burgerName , String restaurantName , Integer rating , String notes){
        this.id = id;
        this.burgerName = burgerName;
        this.restaurantName = restaurantName;
        this.rating = rating;
        this.notes = notes;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){

        this.updatedAt = new Date();
    }
    public Long getId() {
        return id;
    }

    public void setBurgerName(String burgerName){
        this.burgerName = burgerName;
    }
    public String getBurgerName(){
        return burgerName;
    }

    public void setRestaurantName(String restaurantName){
        this.restaurantName = restaurantName;
    }

    public String getRestaurantName(){
            return restaurantName;
    }

    public void  setRating(Integer rates){
        this.rating = rates;
    }

    public Integer getRating(){
        return rating;
    }

    public void setNotes(String notes){
        this.notes = notes;
    }


    public String getNotes(){
        return notes;
    }






    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
