/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavabarsComponent } from './navabars.component';

describe('NavabarsComponent', () => {
  let component: NavabarsComponent;
  let fixture: ComponentFixture<NavabarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavabarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
