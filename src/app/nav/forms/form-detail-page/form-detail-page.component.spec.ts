import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailPageComponent } from './form-detail-page.component';

describe('FormDetailPageComponent', () => {
  let component: FormDetailPageComponent;
  let fixture: ComponentFixture<FormDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
