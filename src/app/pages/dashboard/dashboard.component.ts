import { Financial } from './../../shared/models/financial-interface';
import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/core/services/financial/financial.service';

import { delay } from 'rxjs/operators';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: Financial;
  loading: boolean = true;

  constructor(private service: FinancialService) {}

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.service
      .getFinance()
      .pipe(delay(1000))
      .subscribe(
        (success) => {
          this.loading = false;
          this.data = success;
        },
        (error) => {
          this.loading = false;
          console.error('API Error', error);
        }
      );
  }
}
