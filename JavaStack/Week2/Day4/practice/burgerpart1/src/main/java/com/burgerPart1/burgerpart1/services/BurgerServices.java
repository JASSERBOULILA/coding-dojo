package com.burgerPart1.burgerpart1.services;

import java.util.List;
import java.util.Optional;

import com.burgerPart1.burgerpart1.models.Burger;
import com.burgerPart1.burgerpart1.repositories.BurgerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BurgerServices {

    @Autowired
    private BurgerRepository burgerRepository;


    public List<Burger> allBurgers(){

        return burgerRepository.findAll();
    }

    public Burger createBurger(Burger b){
        return burgerRepository.save(b);
    }

    public Burger findBurger(Long id){
        Optional<Burger> optionalBurger = burgerRepository.findById(id);
        return optionalBurger.orElse(null);
    }
    // UPDATE
    public Burger updateBurger(Burger b) {
        return burgerRepository.save(b);
    }

    public void deleteBurger(Long id) {
        burgerRepository.deleteById(id);
    }
}
