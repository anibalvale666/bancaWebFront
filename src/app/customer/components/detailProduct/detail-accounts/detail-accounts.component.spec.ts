import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccountsComponent } from './detail-accounts.component';

describe('DetailAccountsComponent', () => {
  let component: DetailAccountsComponent;
  let fixture: ComponentFixture<DetailAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
