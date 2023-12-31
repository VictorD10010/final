package com.livro.demo.repositories;

import com.livro.demo.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LivroRepository extends JpaRepository<Livro, Integer> {

}

