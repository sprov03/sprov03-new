import { Component, OnInit } from '@angular/core';
import {Form, FormsService} from '../../../services/forms.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-detail-page',
  templateUrl: './form-detail-page.component.html',
  styles: []
})
export class FormDetailPageComponent implements OnInit {
  form: Form;

  constructor(private formService: FormsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.formService.getForm(parseInt(params.form_id, 10)).subscribe(form => {
        this.form = form;
      });
    });
  }
}
