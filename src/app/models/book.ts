export class Book {
    id_book: number
    id_user:number
    title: string
    type:string
    author:string
    price: number
    photo: string
   constructor(title: string, price: number, author:string, type: string, photo:string, id_book: number){
       this.title = title
       this.price = price
       this.author = author
       this.type = type
       this.id_book = id_book
       this.id_user
       this.photo = photo

   }
 }

