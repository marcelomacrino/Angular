import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindEstiloComponent } from './bind-estilo.component';

describe('BindEstiloComponent', () => {
  let component: BindEstiloComponent;
  let fixture: ComponentFixture<BindEstiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindEstiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
