import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEspecialistaComponent } from './formulario-especialista.component';

describe('FormularioEspecialistaComponent', () => {
  let component: FormularioEspecialistaComponent;
  let fixture: ComponentFixture<FormularioEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
