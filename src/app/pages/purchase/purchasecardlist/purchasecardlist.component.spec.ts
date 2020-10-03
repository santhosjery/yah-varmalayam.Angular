import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasecardlistComponent } from './purchasecardlist.component';

describe('PurchasecardlistComponent', () => {
  let component: PurchasecardlistComponent;
  let fixture: ComponentFixture<PurchasecardlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasecardlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasecardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
