import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanydetailComponent } from './addcompanydetail.component';

describe('AddcompanydetailComponent', () => {
  let component: AddcompanydetailComponent;
  let fixture: ComponentFixture<AddcompanydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
