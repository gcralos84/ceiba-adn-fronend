import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltarUsuarioComponent } from './filtar-usuario.component';

describe('FiltarUsuarioComponent', () => {
  let component: FiltarUsuarioComponent;
  let fixture: ComponentFixture<FiltarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
