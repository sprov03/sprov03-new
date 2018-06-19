import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-nav',
  template: `
    <h1 class="alert alert-dark">Heroes Section</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class HeroNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
