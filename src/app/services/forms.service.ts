import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private formUrl = '/api/forms';

  constructor(private http: HttpClient) { }

  getForm(id: number): Observable<Form> {
    return this.http.get<Form>(`${this.formUrl}/${id}`);
  }

  getForms(): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.formUrl}`);
  }

  updateForm(form: Form): Observable<null> {
    return this.http.put<null>(`${this.formUrl}/${form.id}`, form);
  }
  createForm(form: Form): Observable<null> {
    return this.http.post<null>(`${this.formUrl}`, form);
  }
}

export enum FormFieldType {
  Text = 'text',
  Tel = 'tel',
  Email = 'email',
  Checkbox = 'checkbox'
}

export class FormField {
  id: number;
  placeholder: string;
  label: string;
  value: string;
  type: FormFieldType;
}

export class Form {
  id: number;
  title: string;
  formFields: FormField[];
}
