/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultistepComponent } from './multistep.component';

describe('MultistepComponent', () => {
  let component: MultistepComponent;
  let fixture: ComponentFixture<MultistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
