export class Book {
    title: string
    price: number
    author:string
    type:string
    photo: string
    id_book: number
   constructor(title: string, price: number, author:string, type: string, photo:string, id_book: number){
       this.title = title
       this.price = price
       this.author = author
       this.type = type
       this.photo = photo
       this.id_book = id_book

   }
 }

