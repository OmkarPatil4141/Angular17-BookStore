import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book-service.service';
import { error } from 'console';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit
{

  BookInfo : any;
  errMsg : any;

  constructor(private active_route:ActivatedRoute, private bookService : BookService)
  {

  }

  ngOnInit(): void 
  {
    this.active_route.paramMap.subscribe(
    (parameter)=>{
        let id = Number(parameter.get('id'));
        
        this.bookService.getBookById(id).subscribe(
          (BookInfo)=>{
            console.log(BookInfo);
            this.BookInfo = BookInfo;
          })
      },
      
    (error)=>{
        console.log(error)
        this.errMsg = error;
      })   
  }

}


