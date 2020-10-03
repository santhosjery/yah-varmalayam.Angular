import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgstComponent } from './addgst.component';

describe('AddgstComponent', () => {
  let component: AddgstComponent;
  let fixture: ComponentFixture<AddgstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
