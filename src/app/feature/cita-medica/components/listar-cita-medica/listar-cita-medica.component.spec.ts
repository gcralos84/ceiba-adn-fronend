import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitaMedicaComponent } from './listar-cita-medica.component';

describe('ListarCitaMedicaComponent', () => {
  let component: ListarCitaMedicaComponent;
  let fixture: ComponentFixture<ListarCitaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitaMedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
