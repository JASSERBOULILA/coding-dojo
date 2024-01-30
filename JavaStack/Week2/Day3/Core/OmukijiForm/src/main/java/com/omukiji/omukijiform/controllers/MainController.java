package com.omukiji.omukijiform.controllers;


import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/omikuji")
public class MainController {


    @GetMapping("")
    public String index(){
        return "index.jsp";
    }
    @PostMapping(value = "/show")
    public String post(HttpSession session
            , Model model
            ,@RequestParam(value = "number") int number
            ,@RequestParam(value = "nameCity") String nameCity
            ,@RequestParam(value="namereal") String realname
            ,@RequestParam(value = "hobby") String hobby
            ,@RequestParam(value = "type") String type
            ,@RequestParam(value = "something") String something){
        session.setAttribute("number" , number);
        session.setAttribute("namecity" , nameCity);
        session.setAttribute("namereal" , realname);
        session.setAttribute("hobby" , hobby);
        session.setAttribute("type" , type);
        session.setAttribute("something" , something);
        return "show.jsp";
    }


}
