import { Financial } from './../../models/financial-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-financial-table',
  templateUrl: './financial-table.component.html',
  styleUrls: ['./financial-table.component.scss'],
})
export class FinancialTableComponent implements OnInit {
  @Input() data: Financial;

  displayedColumns = [
    'dataLancamento',
    'descricao',
    'numero',
    'situacao',
    'dataConfirmacao',
    'dadosBancarios',
  ];

  constructor() {}

  ngOnInit() {}

  formatValue(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
