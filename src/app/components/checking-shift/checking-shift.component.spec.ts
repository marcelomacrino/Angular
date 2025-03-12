import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingShiftComponent } from './checking-shift.component';

describe('CheckingShiftComponent', () => {
  let component: CheckingShiftComponent;
  let fixture: ComponentFixture<CheckingShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
