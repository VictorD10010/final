package com.livro.demo.repositories;

import com.livro.demo.model.Exemplar;
import org.springframework.data.jpa.repository.JpaRepository;




public interface ExemplarRepository extends JpaRepository<Exemplar, Integer> {

}

