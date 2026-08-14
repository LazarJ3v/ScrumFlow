import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCode } from './join-code';

describe('JoinCode', () => {
  let component: JoinCode;
  let fixture: ComponentFixture<JoinCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinCode],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
