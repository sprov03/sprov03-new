import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FinancialService, Transaction, TransactionType} from '../../../services/financial.service';

@Component({
  selector: 'app-create-transaction-page',
  templateUrl: './create-transaction-page.component.html',
  styles: []
})
export class CreateTransactionPageComponent implements OnInit {
  transactionForm: FormGroup;
  private defaultTransaction: Transaction = {
    id: null,
    description: '',
    type: TransactionType.Expense,
    amount: 0.00,
    location: '',
    tags: [],
    transactionDate: new Date(),
    group: {
      id: 1,
      label: 'Default Group'
    }
  };
  constructor(private formBuilder: FormBuilder, private financialService: FinancialService) {
    this.transactionForm = this.formBuilder.group(this.defaultTransaction);
  }

  ngOnInit() {
  }
  submit() {
    this.financialService.createTransaction(this.transactionForm.value);
  }
}
