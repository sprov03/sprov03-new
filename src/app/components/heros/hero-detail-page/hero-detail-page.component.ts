import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../../services/heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail-page',
  template: `
    <button (click)="back()">Back</button>
    <app-hero-details [hero]="heroService.hero" *ngIf="heroService.hero"></app-hero-details>
    <button (click)="back()">Back</button>
  `,
  styles: []
})
export class HeroDetailPageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, public heroService: HeroesService, private location: Location) {
    this.heroService.hero = null;
    this.activeRoute.params.subscribe(param => {
      this.heroService.getHero(parseInt(param.hero_id)).subscribe(hero => this.heroService.hero = hero);
    });
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }
}
