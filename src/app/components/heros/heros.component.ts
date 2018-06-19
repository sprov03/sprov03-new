import { Component, OnInit } from '@angular/core';
import {Hero, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heros',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <a routerLink="/heroes/{{hero.id}}">{{hero.name}}</a>
      </li>
    </ul>
    <div *ngIf="heroService.hero">
      <app-hero-details [hero]="heroService.hero"></app-hero-details>
    </div>
    <div *ngIf="!heroService.hero"><h1>No Hero Selected</h1></div>
  `,
  styles: []
})

export class HerosComponent implements OnInit {
  public heroes: Hero[];

  constructor(public heroService: HeroesService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }
}
