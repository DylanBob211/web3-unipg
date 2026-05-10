import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeForm } from './receipe-form';

describe('ReceipeForm', () => {
  let component: ReceipeForm;
  let fixture: ComponentFixture<ReceipeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceipeForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
