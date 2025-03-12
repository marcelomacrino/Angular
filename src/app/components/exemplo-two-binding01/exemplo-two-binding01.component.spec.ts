import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploTwoBinding01Component } from './exemplo-two-binding01.component';

describe('ExemploTwoBinding01Component', () => {
  let component: ExemploTwoBinding01Component;
  let fixture: ComponentFixture<ExemploTwoBinding01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploTwoBinding01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploTwoBinding01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
