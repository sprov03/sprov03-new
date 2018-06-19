import { Component, OnInit } from '@angular/core';
import {Form, FormsService} from '../../../services/forms.service';

@Component({
  selector: 'app-form-dashboard-page',
  templateUrl: './form-dashboard-page.component.html',
  styles: []
})
export class FormDashboardPageComponent implements OnInit {
  forms: Form[];
  displayedColumns = ['id', 'title'];

  constructor(private formService: FormsService) { }

  ngOnInit() {
    this.formService.getForms().subscribe(forms => {
      this.forms = forms;
    });
  }
}
