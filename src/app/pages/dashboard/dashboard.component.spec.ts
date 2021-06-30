import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { FinancialService } from './../../core/services/financial/financial.service';

import { FinancialTestMock } from '../../../../mock/financial-test-mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: FinancialService, useClass: FinancialTestMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(FinancialService);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call function getDataTable', () => {
    const getDataTableSpy = jest.spyOn(component, 'getDataTable');

    component.ngOnInit();

    expect(getDataTableSpy).toBeCalled();
  });
});
