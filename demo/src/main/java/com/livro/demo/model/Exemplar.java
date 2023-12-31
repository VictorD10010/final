package com.livro.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_exemplar")
public class Exemplar {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer id;
   private Integer numero;
   private Boolean disponivel;

   public Integer getId() {
       return id;
   }

   public Integer getNumero() {
       return numero;
   }

   public Boolean getDisponivel(){
        return disponivel;
   }
 
   public void setNumero(Integer numero) {
       this.numero = numero;
   }

   public void setDisponivel(Boolean disponivel) {
       this.disponivel = disponivel;
   }
}
