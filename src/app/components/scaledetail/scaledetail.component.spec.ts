import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaledetailComponent } from './scaledetail.component';

describe('ScaledetailComponent', () => {
  let component: ScaledetailComponent;
  let fixture: ComponentFixture<ScaledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
