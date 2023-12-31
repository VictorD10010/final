package com.livro.demo.service;

import com.livro.demo.repositories.LivroRepository;
import com.livro.demo.model.Livro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LivroService {

   @Autowired
   private LivroRepository livroRepository;

   public List<Livro> getLivros() {
       return this.livroRepository.findAll();
   }

   public Livro getUsuarioPorId(Integer idLivro) {
       return this.livroRepository.findById(idLivro).orElse(null);
   }

   @Transactional
   public Livro inserirOuAtualizar(Livro livro) {
       Livro livroInserido = this.livroRepository.save(livro);
       return livroInserido;
   }

   public void apagar(Integer id) {
       this.livroRepository.deleteById(id);
   }

public com.livro.demo.model.Livro getLivroPorId(Integer idLivro) {
	return null;
}
}
