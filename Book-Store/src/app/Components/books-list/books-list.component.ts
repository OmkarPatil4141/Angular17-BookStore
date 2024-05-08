import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit
{
    Books : any = [];
    errMsg : string = "";

    constructor(private bookService:BookService)
    {

    }

    ngOnInit(): void 
    {
        this.bookService.getBooks().subscribe(
        (BookData =>{
          this.Books = BookData;
        }),
        (error =>{
          this.errMsg = "Unable to fetch data from API";
          console.error(error);
        }))
    }



}
