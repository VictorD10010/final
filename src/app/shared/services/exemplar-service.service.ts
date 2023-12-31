import { Injectable } from '@angular/core';
import { Exemplar } from '../model/exemplar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemplarServiceService {

  URL_EXEMPLARES= 'http://localhost:8080/exemplares';
  constructor(private httpClient: HttpClient) {}

    criar(exemplar: Exemplar): Observable<Exemplar[]> {
      return this.httpClient.post<Exemplar[]>(this.URL_EXEMPLARES, exemplar);
    }

    listar(): Observable<Exemplar[]>{
      return this.httpClient.get<Exemplar[]>(this.URL_EXEMPLARES);
    }

    atualizar(exemplar: Exemplar): Observable<Exemplar>{
      return this.httpClient.put<Exemplar>(`${this.URL_EXEMPLARES}/${exemplar.id}`, exemplar);
    }

    excluir(id: number): Observable<Exemplar>{
      return this.httpClient.delete<Exemplar>(`${this.URL_EXEMPLARES}/${id}`)
    }

}
