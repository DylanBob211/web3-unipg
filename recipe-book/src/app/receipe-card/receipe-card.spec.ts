import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeCard } from './receipe-card';

describe('ReceipeCard', () => {
  let component: ReceipeCard;
  let fixture: ComponentFixture<ReceipeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceipeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
