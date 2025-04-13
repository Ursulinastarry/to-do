import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCardsComponent } from './responsive-cards.component';

describe('ResponsiveCardsComponent', () => {
  let component: ResponsiveCardsComponent;
  let fixture: ComponentFixture<ResponsiveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
