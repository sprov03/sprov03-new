import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialNavComponent } from './financial-nav.component';

describe('FinancialNavComponent', () => {
  let component: FinancialNavComponent;
  let fixture: ComponentFixture<FinancialNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
