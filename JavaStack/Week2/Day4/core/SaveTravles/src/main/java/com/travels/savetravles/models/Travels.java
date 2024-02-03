package com.travels.savetravles.models;


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
@Table(name = "Travels")
public class Travels {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotBlank
    @Size(min = 5 ,max = 200)
    private String expenseName ;


    @NotBlank
    @Size(min = 5 , max = 200)
    private String vendor;



    @Min(0)
    private Double amount ;

    @NotBlank
    @Size(min = 5 , max = 999)
    private String description ;

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    public void setId(Long id) {
        this.id = id;
    }
    public Travels(){

    }


    public Travels(String expenseName , String vendor , Double amount , String description){
        this.expenseName = expenseName;
        this.amount = amount;
        this.description = description;
        this.vendor = vendor;
    }

    public Long getId() {
        return id;
    }

    public String getExpenseName(){
        return expenseName;
    }

    public void setExpenseName(String expenseName){
        this.expenseName = expenseName;
    }


    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getVendor(){
        return vendor;
    }

    public void setVendor(String vendor){
        this.vendor = vendor;
    }


    public Double getAmount(){
        return amount;
    }

    public void setAmount(Double amount){
        this.amount = amount;
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

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){

        this.updatedAt = new Date();
    }

}
