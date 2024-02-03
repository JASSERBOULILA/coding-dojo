package com.travels.savetravles.repository;


import java.util.List;


import com.travels.savetravles.models.Travels;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelsRepositiory extends CrudRepository<Travels , Long> {


    List<Travels> findAll();

}
