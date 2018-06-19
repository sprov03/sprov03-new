import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDashboardPageComponent } from './schedule-dashboard-page.component';

describe('ScheduleDashboardPageComponent', () => {
  let component: ScheduleDashboardPageComponent;
  let fixture: ComponentFixture<ScheduleDashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDashboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
