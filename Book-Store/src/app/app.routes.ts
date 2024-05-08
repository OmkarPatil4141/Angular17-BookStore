import { Routes } from '@angular/router';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { BooksListComponent } from './Components/books-list/books-list.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';


export const routes: Routes = [
    
    {
        path :'',
        component:HomeComponent

    },

    {
        path:'books', 
        // redirectTo:'books',
        component:BooksListComponent,
        

    },
    {
        path:'books/:id',
        component:BookDetailsComponent
    },
    {
        path:'**',
        component:ErrorPageComponent
    },
    
];
