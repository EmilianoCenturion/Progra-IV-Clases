import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hijito2 } from './hijito2';

describe('Hijito2', () => {
  let component: Hijito2;
  let fixture: ComponentFixture<Hijito2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijito2],
    }).compileComponents();

    fixture = TestBed.createComponent(Hijito2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
