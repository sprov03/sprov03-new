import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Form, FormFieldType} from './services/forms.service';
import {Todo} from './services/todos.service';
import {Transaction, TransactionType} from './services/financial.service';
import {Hero} from './services/heroes.service';
import {Employee} from './services/employee.service';
import {User} from './services/user.service';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees: Employee[] = [
      {
        id: 0,
        firstName: 'Default First Name',
        lastName: 'Default Last Name',
        createdAt: new Date()
      },
      {
        id: 1,
        firstName: 'Shawn',
        lastName: 'Pivonka',
        createdAt: new Date()
      },
      {
        id: 2,
        firstName: 'Shawn',
        lastName: 'Pivonka',
        createdAt: new Date()
      },
      {
        id: 3,
        firstName: 'Shawn',
        lastName: 'Pivonka',
        createdAt: new Date()
      },
    ];
    const heroes: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const todos: Todo[] = [
      { id: 1, isComplete: false, title: 'First Todo', description: 'First todo Description' },
      { id: 2, isComplete: false, title: 'Second Todo', description: 'First todo Description' },
      { id: 3, isComplete: true, title: 'Third Todo', description: 'First todo Description' },
      { id: 4, isComplete: true, title: 'Fourth Todo', description: 'First todo Description' },
      { id: 5, isComplete: true, title: 'Fifth Todo', description: 'First todo Description' },
    ];
    const forms: Form[] = [
      { id: 1, title: 'First Form', formFields: [
          {id: 1, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 2, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 3, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 4, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
        ]},
      { id: 2, title: 'First Form', formFields: [
          {id: 5, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 6, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 7, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 8, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
        ]},
      { id: 3, title: 'First Form', formFields: [
          {id: 9, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 10, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 11, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
          {id: 12, label: 'Label', placeholder: 'placeholder', type: FormFieldType.Text, value: 'Woot Nanny'},
        ]},
    ];
    const transactions: Transaction[] = [
      {
        id: 1,
        description: 'Save As You Go Transfer Debit',
        type: TransactionType.Expense,
        amount: 1,
        location: 'San Antonio',
        tags: [
          {
            id: 1,
            label: 'First Tag Example'
          }
        ],
        transactionDate: new Date(),
        group: {
          id: 1,
          label: 'First Group Example'
        }
      }
    ];

    const users: User[] = [
      {
        id: 1,
        email: 'sprov03@gmail.com',
        firstName: 'Shawn',
        lastName: 'Pivonka'
      },
      {
        id: 1,
        email: 'sprov03@gmail.com',
        firstName: 'Shawn',
        lastName: 'Pivonka'
      },
      {
        id: 1,
        email: 'sprov03@gmail.com',
        firstName: 'Shawn',
        lastName: 'Pivonka'
      }
    ];

    return {
      heroes,
      todos,
      forms,
      transactions,
      employees,
      users
    };
  }
}
