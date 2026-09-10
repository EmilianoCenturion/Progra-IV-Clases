import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hijito } from './hijito';

describe('Hijito', () => {
  let component: Hijito;
  let fixture: ComponentFixture<Hijito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijito],
    }).compileComponents();

    fixture = TestBed.createComponent(Hijito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
