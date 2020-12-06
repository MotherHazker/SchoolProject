import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LHComponent } from './lh.component';

describe('LHComponent', () => {
  let component: LHComponent;
  let fixture: ComponentFixture<LHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
