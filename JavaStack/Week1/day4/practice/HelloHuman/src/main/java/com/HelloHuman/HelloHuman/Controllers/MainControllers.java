package com.HelloHuman.HelloHuman.Controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainControllers {

    @RequestMapping("/")
    public String hello(@RequestParam(value="q" , required=false)String searchQuery,
                        @RequestParam(value="lastName" ,required=false)String lastName,
                        @RequestParam(value="times" , required = false)int times){
        System.out.println("the search query is " + searchQuery);
        if(searchQuery == null){
            return "Hello Human";
        }else if(searchQuery!=null && lastName != null && times == 0){
            String result ="Hello : ";
            result+=searchQuery+ " " +lastName;
            return result;
        }else if(searchQuery != null && lastName!= null && times!= 0){
            String result = "";

            for(int i =0;i<times ; i++){
                result+=" Hello : " + searchQuery + " " + lastName ;
            }
            return result;
        }
        return "Hello Human";
    }
}
