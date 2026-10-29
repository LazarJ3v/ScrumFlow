import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteamPage } from './createteam-page';

describe('CreateteamPage', () => {
  let component: CreateteamPage;
  let fixture: ComponentFixture<CreateteamPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateteamPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateteamPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
