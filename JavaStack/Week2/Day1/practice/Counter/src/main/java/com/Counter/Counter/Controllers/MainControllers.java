package com.Counter.Counter.Controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/your_server")
public class MainControllers {
    public void set(HttpSession session){
        session.setAttribute("counterplus" , 0);
    }
    @GetMapping("/count")
    public String index(HttpSession session , Model model){
        System.out.println("the Counter is : 78456123 : " + session.getAttribute("counterplus"));
        model.addAttribute("counter" , session.getAttribute("counterplus"));
        System.out.println("the model is : " + model.getAttribute("counter"));
        return "index.jsp";
    }

    @GetMapping("/countDouble")
    public String count2(HttpSession session , Model model){
        if(session.getAttribute("counterplus") == null){
            session.setAttribute("counterplus" , 0);
        }else{
            int counter = (int) session.getAttribute("counterplus");
            if (counter == 0) {
                session.setAttribute("counterplus", 1);
            } else {
                session.setAttribute("counterplus", counter + 2);
            }
        }
        model.addAttribute("counter" , session.getAttribute("counterplus"));
        return "index1.jsp";
    }
    @GetMapping("")
    public String setCounter(Model model , HttpSession session){
        if(session.getAttribute("counterplus") == null){
            session.setAttribute("counterplus" , 0);
        }else{
            int counter = (int) session.getAttribute("counterplus");
            if (counter == 0) {
                session.setAttribute("counterplus", 1);
            } else {
                session.setAttribute("counterplus", counter + 1);
            }
        }

        System.out.println("the Counter is  : " + session.getAttribute("counterplus"));
        model.addAttribute("counter" , session.getAttribute("counterplus"));
        System.out.println("the model show is : " + model.addAttribute("counter"));
        return "counter.jsp";
    }
    @PostMapping("/reset")
    public String reset(HttpSession session){
        session.setAttribute("counterplus" , 0);
        return "redirect:/your_server/count";
    }
}
