import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardCreditComponent } from './detail-card-credit.component';

describe('DetailCardCreditComponent', () => {
  let component: DetailCardCreditComponent;
  let fixture: ComponentFixture<DetailCardCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCardCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
