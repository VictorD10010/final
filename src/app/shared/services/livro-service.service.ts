import { Injectable } from '@angular/core';
import { Livro } from 'src/app/shared/model/livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

  URL_LIVROS= 'http://localhost:8080/livros';
  constructor(private httpClient: HttpClient) {}

    criar(livro: Livro): Observable<Livro[]> {
      return this.httpClient.post<Livro[]>(this.URL_LIVROS, livro);
    }

    listar(): Observable<Livro[]>{
      return this.httpClient.get<Livro[]>(this.URL_LIVROS);
    }

    atualizar(livro: Livro): Observable<Livro>{
      return this.httpClient.put<Livro>(`${this.URL_LIVROS}/${livro.id}`, livro);
    }

    excluir(id: number): Observable<Livro>{
      return this.httpClient.delete<Livro>(`${this.URL_LIVROS}/${id}`)
    }
}
