import { Book } from "./book";
import { User } from "./user";

export class Respuesta {
    constructor(public error: boolean, 
                public codigo: number,
                public mensaje: string,
                public data?: Book[],
                public data_book?:Book,
                public data_user?: User){
                    
                }
}
