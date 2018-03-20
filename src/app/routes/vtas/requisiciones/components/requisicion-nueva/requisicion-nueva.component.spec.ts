import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicionNuevaComponent } from './requisicion-nueva.component';

describe('RequisicionNuevaComponent', () => {
  let component: RequisicionNuevaComponent;
  let fixture: ComponentFixture<RequisicionNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisicionNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisicionNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
