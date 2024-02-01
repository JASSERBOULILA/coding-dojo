package com.burgerPart1.burgerpart1.controllers;


import com.burgerPart1.burgerpart1.models.Burger;
import com.burgerPart1.burgerpart1.services.BurgerServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class MainControllers {
    @Autowired
    private  BurgerServices burgerServices;
    @GetMapping("/")
    public String Show(@ModelAttribute("burger") Burger burger , Model model){
        List<Burger> allBurgers = burgerServices.allBurgers();
        model.addAttribute("allBurgers" , allBurgers);
        return "create.jsp";
    }

    @PostMapping("/burger/new")
    public String create(@Valid @ModelAttribute("burger") Burger burger ,
                         BindingResult result , Model model){
        if(result.hasErrors()){
            List<Burger> allBurgers = burgerServices.allBurgers();
            model.addAttribute("allBurgers" , allBurgers);
            return "create.jsp";
        }else{
            Burger newBurger = burgerServices.createBurger(burger);
            return "redirect:/";
        }
    }

    @GetMapping("/burger/edit/{id}")
    public String getOneBurger(Model model , @PathVariable("id") Long id){
        Burger oneBurger = burgerServices.findBurger(id);
        model.addAttribute("burger" , oneBurger);
        return "editBurger.jsp";
    }

    @PutMapping("/burger/edit/{id}")
    public String updateOneBurger(@Valid @ModelAttribute("burger") Burger burger  , BindingResult result){
        if(result.hasErrors()){
            return "editBurger.jsp";
        }else{
            burgerServices.updateBurger(burger);
            return "redirect:/";
        }
    }

}
