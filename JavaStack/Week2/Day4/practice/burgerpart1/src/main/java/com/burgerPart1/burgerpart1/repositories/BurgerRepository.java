package com.burgerPart1.burgerpart1.repositories;


import java.util.List;

import com.burgerPart1.burgerpart1.models.Burger;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BurgerRepository extends CrudRepository<Burger, Long> {

    List<Burger> findAll();
}
