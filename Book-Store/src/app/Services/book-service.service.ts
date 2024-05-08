import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URL = "https://softwium.com/api/books"

  constructor(private htttp : HttpClient) { }

  getBooks()
  {
     return this.htttp.get(this.API_URL);
  }

  getBookById(id:number)
  {
    return this.htttp.get(`${this.API_URL}/${id}`);
  }
}
