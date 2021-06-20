import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitaMedicaComponent } from './crear-cita-medica.component';

describe('CrearCitaMedicaComponent', () => {
  let component: CrearCitaMedicaComponent;
  let fixture: ComponentFixture<CrearCitaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
