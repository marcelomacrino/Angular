import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindEventTecladoComponent } from './bind-event-teclado.component';

describe('BindEventTecladoComponent', () => {
  let component: BindEventTecladoComponent;
  let fixture: ComponentFixture<BindEventTecladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindEventTecladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindEventTecladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
