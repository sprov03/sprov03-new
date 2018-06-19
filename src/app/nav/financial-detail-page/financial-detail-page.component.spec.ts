import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDetailPageComponent } from './financial-detail-page.component';

describe('FinancialDetailPageComponent', () => {
  let component: FinancialDetailPageComponent;
  let fixture: ComponentFixture<FinancialDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
