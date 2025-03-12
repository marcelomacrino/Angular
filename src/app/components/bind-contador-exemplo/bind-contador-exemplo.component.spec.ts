import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindContadorExemploComponent } from './bind-contador-exemplo.component';

describe('BindContadorExemploComponent', () => {
  let component: BindContadorExemploComponent;
  let fixture: ComponentFixture<BindContadorExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindContadorExemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindContadorExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
