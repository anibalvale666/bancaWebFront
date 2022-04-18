import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardConsumptionComponent } from './credit-card-consumption.component';

describe('CreditCardConsumptionComponent', () => {
  let component: CreditCardConsumptionComponent;
  let fixture: ComponentFixture<CreditCardConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardConsumptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
