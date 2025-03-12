import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCartCalculationComponent } from './simple-cart-calculation.component';

describe('SimpleCartCalculationComponent', () => {
  let component: SimpleCartCalculationComponent;
  let fixture: ComponentFixture<SimpleCartCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCartCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCartCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
