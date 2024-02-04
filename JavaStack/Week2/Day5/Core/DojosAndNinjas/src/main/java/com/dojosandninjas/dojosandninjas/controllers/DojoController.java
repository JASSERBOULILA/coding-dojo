package com.dojosandninjas.dojosandninjas.controllers;


import com.dojosandninjas.dojosandninjas.models.Dojos;
import com.dojosandninjas.dojosandninjas.services.DojosServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class DojoController {

    @Autowired
    private DojosServices dojosServices;

    @GetMapping("/")
    private String index() {
        return "redirect:/dojos/new";
    }

    @GetMapping("/dojos/new")
    public String getAllDojo(@ModelAttribute("newDojo") Dojos dojos, Model model) {
        List<Dojos> allDojos = dojosServices.allDojos();

        model.addAttribute("allDojos", allDojos);
        return "home.jsp";
    }

    @PostMapping("/dojos/new")
    public String createDojo(@Valid @ModelAttribute("newDojo") Dojos dojos, BindingResult result, Model model) {
        if (result.hasErrors()) {
            List<Dojos> allDojos = dojosServices.allDojos();
            model.addAttribute("allDojos", allDojos);
            return "home.jsp";
        }

        dojosServices.createDojo(dojos);
        return "redirect:/dojos/new";
    }

    @GetMapping("/dojos/{id}")
    private String getAllNinjas(@PathVariable("id")Long id , Model model){
        Dojos savedDojos = dojosServices.findOneDojoById(id);
        model.addAttribute("allDojos" ,savedDojos);
        return "allNinjas.jsp" ;
    }
}