import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  private transactionUrl = '/api/transactions';

  constructor(private http: HttpClient) { }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.transactionUrl}`);
  }

  updateTransaction(transaction: Transaction): Observable<null> {
    return this.http.put<null>(`${this.transactionUrl}/${transaction.id}`, transaction);
  }
  createTransaction(transaction: Transaction): Observable<null> {
    return this.http.post<null>(`${this.transactionUrl}`, transaction);
  }
}

export class Tag {
  id: number;
  label: string;
}

export enum TransactionType {
  Expense = 'expense',
  Income = 'income'
}

class TransactionGroup {
  id: number;
  label: string;
}

export class Transaction {
  id: number;
  description: string;
  type: TransactionType;
  amount: number;
  location: string;
  tags: Tag[];
  transactionDate: Date;
  group: TransactionGroup;
}
