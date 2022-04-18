import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCustomerProductsComponent } from './details-customer-products.component';

describe('DetailsCustomerProductsComponent', () => {
  let component: DetailsCustomerProductsComponent;
  let fixture: ComponentFixture<DetailsCustomerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCustomerProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCustomerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
