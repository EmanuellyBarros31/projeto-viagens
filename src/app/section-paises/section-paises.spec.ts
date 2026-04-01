import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPaises } from './section-paises';

describe('SectionPaises', () => {
  let component: SectionPaises;
  let fixture: ComponentFixture<SectionPaises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPaises],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPaises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
