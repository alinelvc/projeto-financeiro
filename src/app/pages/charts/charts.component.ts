import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/core/services/financial/financial.service';

@Component({
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  constructor(private service: FinancialService) {}
  data: any;

  ngOnInit(): void {
    this.getDataFinancialControl();
  }

  getDataFinancialControl() {
    this.service.getFinance().subscribe(
      (success) => {
        this.data = success;
      },
      (error) => {
        console.error('API Error', error);
      }
    );
  }
}
