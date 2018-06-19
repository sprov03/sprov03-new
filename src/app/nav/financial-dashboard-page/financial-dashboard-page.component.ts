import { Component, OnInit } from '@angular/core';
import {FinancialService, Transaction} from '../../services/financial.service';

@Component({
  selector: 'app-financial-dashboard-page',
  templateUrl: './financial-dashboard-page.component.html',
  styles: []
})
export class FinancialDashboardPageComponent implements OnInit {
  transactions: Transaction[];
  displayedColumns = ['id', 'amount', 'description', 'location', 'type'];

  constructor(private financialService: FinancialService) { }

  ngOnInit() {
    this.financialService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
