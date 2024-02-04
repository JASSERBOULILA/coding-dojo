package com.dojosandninjas.dojosandninjas.services;


import com.dojosandninjas.dojosandninjas.models.Dojos;
import com.dojosandninjas.dojosandninjas.repository.DojosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DojosServices {

    @Autowired
    private DojosRepository dojosRepository;


    public List<Dojos> allDojos(){
        return dojosRepository.findAll();
    }

//    Create
    public Dojos createDojo(Dojos d){
        return dojosRepository.save(d);
    }


//    read One Dojos
    public Dojos findOneDojoById(Long id){
        Optional<Dojos> maybeDojos = dojosRepository.findById(id);
        return maybeDojos.orElse(null);
    }

//    Update
    public Dojos updateDojos(Dojos d){
        return dojosRepository.save(d);
    }
//    Delete
    public void deleteDojos(Long id){
        dojosRepository.deleteById(id);
    }

}
