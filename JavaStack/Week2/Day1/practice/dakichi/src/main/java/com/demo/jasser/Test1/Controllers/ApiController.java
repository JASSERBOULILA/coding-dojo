package com.demo.jasser.Test1.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dakichi")
public class ApiController{
        @GetMapping("/travel/{ville}")
        public String travel(@PathVariable("ville") String ville){
            return "Conbratuilation You Will Soon travel to  : " + ville;
        }

        @GetMapping("/lottol/{number}")
    public String even(@PathVariable("number") int number){
            return ( number % 2 ==0) ? "You will take a grand journey in the near future, but be weary of tempting offers": "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";

        }

}
