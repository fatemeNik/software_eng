import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSignupComponent } from './t-signup.component';

describe('TSignupComponent', () => {
  let component: TSignupComponent;
  let fixture: ComponentFixture<TSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
