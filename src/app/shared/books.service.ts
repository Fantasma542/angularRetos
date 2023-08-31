import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = "http://localhost:3000/book"
  public books: Book[] = [];
  constructor(private http: HttpClient) { }


  
  
  getAll(): Observable<Respuesta> {
    return this.http.get<Respuesta>(this.url);
  }
  
  
  add(book: Book){
    return this.http.post(this.url, book);
  }


  getOne(id_book: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}?id=${id_book}`);
  }
  edit(book: Book): Observable<Object> {
    return this.http.put(this.url, book);
  }
  delete(id_book: number) {
    return this.http.delete(this.url);
  }
}

