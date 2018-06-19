import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list-page',
  template: `
    <app-heros></app-heros>
  `
})
export class HeroListPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
