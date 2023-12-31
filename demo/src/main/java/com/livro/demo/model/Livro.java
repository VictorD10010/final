package com.livro.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_livro")
public class Livro {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id;
   private String titulo;
   private String autor;
   private String descricao;

   public Integer getId() {
       return id;
   }

   public String getTitulo() {
       return titulo;
   }

   public void setTitulo(String titulo) {
       this.titulo = titulo;
   }

   public String getAutor() {
       return autor;
   }

   public void setAutor(String autor) {
       this.autor = autor;
   }

   public String getDescricao() {
       return descricao;
   }

   public void setDescricao(String descricao) {
       this.descricao = descricao;
   }
}
