import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero, HeroesService} from '../../../services/heroes.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hero-details',
  template: `
    <h2>{{ hero.name | uppercase }} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div><span>name: </span>{{hero.name}}</div>
    <div>
      <form [formGroup]="heroForm">
        <label>name:
          <input placeholder="name" formControlName="name">
        </label>
        <button class="btn btn-primary" (click)="submit()">Submit</button>
      </form>
    </div>
  `,
  styles: []
})
export class HeroDetailsComponent implements OnInit {

  @Input()
  public hero: Hero;

  public heroForm: FormGroup | null;

  constructor(private formBuilder: FormBuilder, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroForm = this.formBuilder.group(this.hero);
  }

  submit() {
    this.heroesService.updateHero(this.heroForm.value).subscribe(() => {
      this.heroesService.hero = this.heroForm.value;
    });
  }
}
