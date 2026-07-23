import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProfile } from './table-profile';

describe('TableProfile', () => {
  let component: TableProfile;
  let fixture: ComponentFixture<TableProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(TableProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
