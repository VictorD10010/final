import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/shared/model/livro';
import { LivroServiceService } from 'src/app/shared/services/livro-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mantem-livro',
  templateUrl: './mantem-livro.component.html',
  styleUrls: ['./mantem-livro.component.css']
})
export class MantemLivroComponent {
  title= 'Livro';

  novoLivroTitulo!: string;
  livros: Observable<Livro[]> = new Observable<Livro[]>();

  constructor(private livroService: LivroServiceService) {}

  ngOnInit(): void {
    this.listarLivros();
  }

  criarLivro(): void {
    const novoLivro: Livro = {
      id: 0,
      titulo: 'It',
      autor: 'Stephen King',
      descricao: '',
      exemplares: []
    };
    this.livroService.criar(novoLivro);
    this.listarLivros();
    this.novoLivroTitulo = '';
  }
  listarLivros(): void {
    this.livros = this.livroService.listar();
  }
  atualizarLivro(livro: Livro): void {
    this.livroService.atualizar(livro).subscribe(() => this.listarLivros());
  }

  excluirLivro(id: number): void {
    this.livroService.excluir(id).subscribe(() => this.listarLivros());
  }

}
