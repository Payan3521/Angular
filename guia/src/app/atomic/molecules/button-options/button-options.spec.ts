import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOptions } from './button-options';

describe('ButtonOptions', () => {
  let component: ButtonOptions;
  let fixture: ComponentFixture<ButtonOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
