import { Livro } from './livro';

export class Exemplar {

    id: number; 
    numero: number; 
    disponivel: boolean; 
    livro: Livro;

    constructor(id: number, numero: number, disponivel: boolean,livro: Livro) {
        this.id=id;
        this.numero=numero;
        this.disponivel=disponivel;
        this.livro=livro;
    }
    /** 
    public getId(): number{
        return this.id;
    }
    public getNumero(): number{
        return this.numero;
    }
    public getDisponivel(): boolean{
        return this.disponivel;
    }

    public setId(id: number){
        this.id=id;
    }

    public setNumero(numero: number){
        this.numero=numero;
    }

    public setDisponivel(disponivel: boolean){
        this.disponivel=disponivel;
    } */

}