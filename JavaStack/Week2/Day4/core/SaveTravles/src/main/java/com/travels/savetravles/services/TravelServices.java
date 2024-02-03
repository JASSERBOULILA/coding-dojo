package com.travels.savetravles.services;


import java.util.List;
import java.util.Optional;

import com.travels.savetravles.models.Travels;
import com.travels.savetravles.repository.TravelsRepositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TravelServices {

    @Autowired
    private TravelsRepositiory travelsRepositiory;



    public List<Travels> allTravels(){
        return  travelsRepositiory.findAll();
    }


    public Travels createTravel(Travels t){
        return travelsRepositiory.save(t);
    }

    public Travels findTravel(Long id ){
        Optional<Travels> optionalTravels = travelsRepositiory.findById(id);
        return optionalTravels.orElse(null);
    }

    public Travels updateTravels(Travels t){
        return travelsRepositiory.save(t);
    }
    public void deleteTravels(Long id){
        travelsRepositiory.deleteById(id);
    }
}
