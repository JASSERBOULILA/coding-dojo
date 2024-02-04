package com.dojosandninjas.dojosandninjas.repository;

import com.dojosandninjas.dojosandninjas.models.Dojos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DojosRepository extends CrudRepository<Dojos , Long> {
    List<Dojos> findAll();
}
