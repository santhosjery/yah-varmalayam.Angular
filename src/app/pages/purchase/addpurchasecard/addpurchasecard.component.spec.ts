import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasecardComponent } from './addpurchasecard.component';

describe('AddpurchasecardComponent', () => {
  let component: AddpurchasecardComponent;
  let fixture: ComponentFixture<AddpurchasecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchasecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchasecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
