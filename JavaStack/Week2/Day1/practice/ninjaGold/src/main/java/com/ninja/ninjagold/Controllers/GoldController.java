package com.ninja.ninjagold.Controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.Random;

@Controller
public class GoldController {

    @RequestMapping("/")
    public String index(HttpSession session, Model model) {
        if (session.getAttribute("gold") == null) {
            session.setAttribute("gold", 0);
        }
        if (session.getAttribute("activityLog") == null) {
            session.setAttribute("activityLog", "");
        }

        model.addAttribute("gold", session.getAttribute("gold"));
        model.addAttribute("activityLog", session.getAttribute("activityLog"));

        return "index.jsp";
    }

    @PostMapping("/process_money")
    public String processMoney(String location, HttpSession session, Model model) {
        int goldEarned = getGoldEarned(location);

        int currentGold = (int) session.getAttribute("gold");
        session.setAttribute("gold", currentGold + goldEarned);

        // Update the model with the new gold value
        model.addAttribute("gold", session.getAttribute("gold"));

        String activityLog = (String) session.getAttribute("activityLog");
        LocalDateTime timestamp = LocalDateTime.now();
        activityLog += String.format("Ninja went to %s and %s %d gold. (%s)%n",
                location, (goldEarned >= 0 ? "gained" : "lost"), Math.abs(goldEarned), timestamp);
        session.setAttribute("activityLog", activityLog);

        return "redirect:/";
    }

    private static int getGoldEarned(String location) {
        int goldEarned = 0;
        Random random = new Random();

        if (location.equals("farm")) {
            goldEarned = random.nextInt(11) + 10;
        } else if (location.equals("cave")) {
            goldEarned = random.nextInt(6) + 5;
        } else if (location.equals("house")) {
            goldEarned = random.nextInt(4) + 2;
        } else if (location.equals("quest")) {
            goldEarned = random.nextInt(101) - 50;
        } else if (location.equals("spa")) {
            goldEarned = random.nextInt(16) - 5;
        }
        return goldEarned;
    }

    @PostMapping("/reset")
    public String reset(HttpSession session) {
        session.setAttribute("gold", 0);
        session.setAttribute("activityLog", "");
        return "redirect:/";
    }
}
