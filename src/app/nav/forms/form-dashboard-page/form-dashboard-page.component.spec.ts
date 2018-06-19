import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDashboardPageComponent } from './form-dashboard-page.component';

describe('FormDashboardPageComponent', () => {
  let component: FormDashboardPageComponent;
  let fixture: ComponentFixture<FormDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
