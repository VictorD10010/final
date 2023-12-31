package com.livro.demo.controller;

import com.livro.demo.model.Livro;
import com.livro.demo.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class LivroController {

   @Autowired
   private LivroService livroService;

   @GetMapping("/livros")
   public List<Livro> getLivros() {
       return this.livroService.getLivros();
   }

   @GetMapping("/livros/{id}")
   public Livro getLivroPorId(@PathVariable("id") Integer idLivro) {
       return this.livroService.getLivroPorId(idLivro);
   }

   @PostMapping("/livros")
   public Livro inserirLivro(@RequestBody Livro livro){
       return this.livroService.inserirOuAtualizar(livro);
   }

   @PutMapping("/livros/{id}")
   public Livro atualizarLivro(@RequestBody Livro livro){
       return this.livroService.inserirOuAtualizar(livro);
   }

   @DeleteMapping("/livro/{id}")
   public void apagarLivro(@PathVariable("id") Integer id) {
       this.livroService.apagar(id);
   }
}
