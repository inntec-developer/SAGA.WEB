import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposUsuariosComponent } from './grupos-usuarios.component';

describe('GruposUsuariosComponent', () => {
  let component: GruposUsuariosComponent;
  let fixture: ComponentFixture<GruposUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
