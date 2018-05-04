import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPersonasComponent } from './dt-personas.component';

describe('DtPersonasComponent', () => {
  let component: DtPersonasComponent;
  let fixture: ComponentFixture<DtPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
