import { Component, OnInit } from '@angular/core';
import {computed, observable} from 'mobx-angular';

@Component({
  selector: 'app-financial-nav',
  templateUrl: './financial-nav.component.html',
  styles: []
})
export class FinancialNavComponent implements OnInit {
  @observable firstName = 'Shawn';
  @observable lastName = 'Pivonka';

  constructor() { }

  ngOnInit() {
  }

  @computed get fullName() {
    console.log('Computed');
    return `${this.firstName} ${this.lastName}`;
  }

  getFullName = () => {
    console.log('Generic');
    return `${this.firstName} ${this.lastName}`;
  }
}
