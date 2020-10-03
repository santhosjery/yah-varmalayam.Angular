import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscaleComponent } from './addscale.component';

describe('AddscaleComponent', () => {
  let component: AddscaleComponent;
  let fixture: ComponentFixture<AddscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
