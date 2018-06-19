import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="nav top-nav">
      <a class="nav-link" routerLinkActive="active" routerLink="/"><span>Sprov03</span></a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
    </nav>
    <ul class="left-nav list-unstyled">
      <li routerLinkActive="active">
        <a routerLink="/heroes">
          <i class="fa fa-2x fa-user"></i>
        </a>
      </li>
      <li routerLinkActive="active">
        <a routerLink="/todos">
          <i class="fa fa-2x fa-list-alt"></i>
        </a>
      </li>
      <li routerLinkActive="active">
        <a routerLink="/forms">
          <i class="fa fa-2x fa-file-excel-o"></i>
        </a>
      </li>
      <li routerLinkActive="active">
        <a routerLink="/financial">
          <i class="fa fa-2x fa-money"></i>
        </a>
      </li>
      <li routerLinkActive="active">
        <a routerLink="/schedule/dashboard">
          <i class="fa fa-2x fa-calendar"></i>
        </a>
      </li>
      <li routerLinkActive="active">
        <a routerLink="/employees/dashboard">
          <i class="fa fa-2x fa-user-o"></i>
        </a>
      </li>
    </ul>
    <div class="page-content">
      <div class="container-fluid">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
}
