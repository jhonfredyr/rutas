import { ComponentFixture, TestBed } from '@angular/core/testing';
import { pedido } from './pedido';

describe('Pedido', () => {
  let component:pedido
  let fixture: ComponentFixture<pedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [pedido],
    }).compileComponents();

    fixture = TestBed.createComponent(pedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
