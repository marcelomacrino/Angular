import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindEventComponent } from './bind-event.component';

describe('BindEventComponent', () => {
  let component: BindEventComponent;
  let fixture: ComponentFixture<BindEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
