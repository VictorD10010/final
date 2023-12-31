import { Livro } from "./livro";
import { Exemplar } from "./exemplar";

const livro: Livro = {   
    id: 12345,
    titulo: 'It',
    autor: 'Stephen King',
    descricao: 'Criatura com aparência de palhaço que mata criança',
    exemplares: [
        {
            id: 1,
            numero: 10,
            disponivel: true
        }
    ]
};

export const LIVROS: Array<Livro> = [livro];