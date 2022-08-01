import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidManagementComponent } from './bid-management.component';

describe('BidManagementComponent', () => {
  let component: BidManagementComponent;
  let fixture: ComponentFixture<BidManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
