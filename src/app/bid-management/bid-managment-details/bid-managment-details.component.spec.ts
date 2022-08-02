import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidManagmentDetailsComponent } from './bid-managment-details.component';

describe('BidManagmentDetailsComponent', () => {
  let component: BidManagmentDetailsComponent;
  let fixture: ComponentFixture<BidManagmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidManagmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidManagmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
