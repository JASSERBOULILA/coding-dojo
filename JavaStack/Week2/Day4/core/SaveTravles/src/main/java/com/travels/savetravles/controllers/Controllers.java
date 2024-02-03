package com.travels.savetravles.controllers;


import com.travels.savetravles.models.Travels;
import com.travels.savetravles.services.TravelServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@Controller
public class Controllers {
    @Autowired
    private TravelServices travelServices;

    @GetMapping("/")
    private String show( @ModelAttribute("travels") Travels travels, Model model){
        List<Travels> allTravels = travelServices.allTravels();
        model.addAttribute("alltravels", allTravels);
        return "index.jsp";
    }

    @GetMapping("/travels/{id}")
    private String showOne(@PathVariable("id") Long id,@ModelAttribute("travels") Travels travels , Model model){
        Travels oneTravel = travelServices.findTravel(id);
        model.addAttribute("travel" , oneTravel);
        return "oneTravel.jsp";
    }

    @PostMapping("/travels/new")
    public String create(@Valid @ModelAttribute("travels") Travels travels, BindingResult result, Model model ){
        if (result.hasErrors()) {
            List<Travels> allTravels = travelServices.allTravels();
            model.addAttribute("alltravels" , allTravels);
            return "index.jsp";
        } else {
            travelServices.createTravel(travels);
            return "redirect:/";
        }
    }
    @GetMapping("/travels/edit/{id}")
    public String editTravel(@Valid @PathVariable("id") Long id, Model model) {
        Travels oneTravel = travelServices.findTravel(id);
        model.addAttribute("travels", oneTravel);
        return "editTravels.jsp";
    }
    @PutMapping("/travels/editt/{id}")
    public String update(@Valid @ModelAttribute("travels") Travels travels,
                         BindingResult result,
                         @PathVariable("id") Long id) {

        if (result.hasErrors()) {
            System.out.println("The travles Id is : " + id);
            return "editTravels.jsp";
        } else {
            System.out.println("The Travles Id is : " + id);
            travelServices.updateTravels(travels);
            return "redirect:/";
        }
    }

    @DeleteMapping("/travels/delete/{id}")
    public String deleteOneTravel(Model model, @PathVariable("id") Long id) {
        travelServices.deleteTravels(id);
        return "redirect:/";
    }


}
