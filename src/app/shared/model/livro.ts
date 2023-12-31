import { Exemplar } from "./exemplar";

export class Livro {

    id: number; 
    titulo: string; 
    autor: string; 
    descricao: string; 
    exemplares: Exemplar[];


    constructor(id: number, titulo: string, autor: string, descricao: string) {
        this.id=id;
        this.titulo=titulo;
        this.autor=autor;
        this.descricao=descricao;
        this.exemplares=[];
    }

    /** 
    public getId(): number{
        return this.id;
    }
    public getTitulo(): string{
        return this.titulo;
    }
    public getAutor(): string{
        return this.autor;
    }
    public getDescricao(): string{
        return this.descricao;
    }

    public setId(id: number){
        this.id=id;
    }

    public setTitulo(titulo: string){
        this.titulo=titulo;
    }

    public setAutor(autor: string){
        this.autor=autor;
    }

    public setDescricao(descricao: string){
        this.descricao=descricao;
    }
    */
}