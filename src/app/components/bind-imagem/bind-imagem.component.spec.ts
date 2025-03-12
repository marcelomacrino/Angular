import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindImagemComponent } from './bind-imagem.component';

describe('BindImagemComponent', () => {
  let component: BindImagemComponent;
  let fixture: ComponentFixture<BindImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindImagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
