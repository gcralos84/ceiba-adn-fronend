import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecialistaComponent } from './listar-especialista.component';

describe('ListarEspecialistaComponent', () => {
  let component: ListarEspecialistaComponent;
  let fixture: ComponentFixture<ListarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
