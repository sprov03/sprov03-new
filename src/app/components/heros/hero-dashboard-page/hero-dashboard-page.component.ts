import { Component, OnInit } from '@angular/core';
import {Hero, HeroesService} from '../../../services/heroes.service';

@Component({
  selector: 'app-hero-dashboard-page',
  template: `
    <h2>Top Heroes: <a routerLink="/heroes/list">view all</a></h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class HeroDashboardPageComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 3));
  }
}
