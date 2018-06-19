import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDashboardPageComponent } from './financial-dashboard-page.component';

describe('FinancialDashboardPageComponent', () => {
  let component: FinancialDashboardPageComponent;
  let fixture: ComponentFixture<FinancialDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
