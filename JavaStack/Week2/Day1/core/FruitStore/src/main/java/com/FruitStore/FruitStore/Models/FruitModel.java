package com.FruitStore.FruitStore.Models;

public class FruitModel {


    private String name ;

    private double price ;


    public FruitModel(String name , double price){
        this.name = name;
        this.price = price;
    }


    public String getName(){
        return this.name;
    }

    public double getPrice(){
        return this.price;
    }
}
