import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatStyleCharacter } from './combat-style-character';

describe('CombatStyleCharacter', () => {
  let component: CombatStyleCharacter;
  let fixture: ComponentFixture<CombatStyleCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatStyleCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatStyleCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
