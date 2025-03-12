import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeydownIncrDecrComponent } from './keydown-incr-decr.component';

describe('KeydownIncrDecrComponent', () => {
  let component: KeydownIncrDecrComponent;
  let fixture: ComponentFixture<KeydownIncrDecrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeydownIncrDecrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeydownIncrDecrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
