import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { FinancialService } from './core/services/financial/financial.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinancialTableComponent } from './shared/components/financial-table/financial-table.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DashboardComponent,
    FinancialTableComponent,
    ChartsComponent,
    HeaderComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgApexchartsModule,
  ],
  providers: [FinancialService],
  bootstrap: [AppComponent],
})
export class AppModule {}
