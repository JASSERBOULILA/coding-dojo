package com.FruitStore.FruitStore.Controllers;


import com.FruitStore.FruitStore.Models.FruitModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

@Controller
public class MainControllers {

    @GetMapping("/")
    public String index(Model model){
        ArrayList<FruitModel> fruits = new ArrayList<FruitModel>();
        fruits.add(new FruitModel("Kiwi", 1.5));
        fruits.add(new FruitModel("Mango", 2.0));
        fruits.add(new FruitModel("Goji Berries", 4.0));
        fruits.add(new FruitModel("Guava", .75));
        model.addAttribute("fruits" , fruits);
        return "fruit.jsp";
    }
}
