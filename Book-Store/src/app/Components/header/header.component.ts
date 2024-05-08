import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <nav class="navbar navbar-light bg-custom rounded-bottom">
    <a class="navbar-brand" href="#">
        <div class="logo">
            <img src="https://www.svgrepo.com/show/125863/books.svg" width="60" height="60" class="d-inline-block align-top" alt="">
            <div class="logo-text">Book-Store</div>
            <div class="welcome"></div>
        </div>
    </a>
</nav>

  `,
  styles: `

.bg-custom {
    background-color: none;
}

.navbar {
    border-radius: 10px 10px 10px 10px;
}

.logo {
    display: flex;
    align-items: center;
}

.welcome {
    font-size: 24px; 
    margin-left: 10px;
    color: #ff0000; 
    font-weight: bold;
}

.logo-text {
    font-weight: bold;
}


  `
})
export class HeaderComponent {

}
