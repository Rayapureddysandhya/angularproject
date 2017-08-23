import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header6Component } from './header6.component';

describe('Header6Component', () => {
  let component: Header6Component;
  let fixture: ComponentFixture<Header6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
