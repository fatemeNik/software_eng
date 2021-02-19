import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarNotComponent } from './snack-bar-not.component';

describe('SnackBarNotComponent', () => {
  let component: SnackBarNotComponent;
  let fixture: ComponentFixture<SnackBarNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
