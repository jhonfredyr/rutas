import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEstudiante } from './for-estudiante';

describe('ForEstudiante', () => {
  let component: ForEstudiante;
  let fixture: ComponentFixture<ForEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForEstudiante],
    }).compileComponents();

    fixture = TestBed.createComponent(ForEstudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
