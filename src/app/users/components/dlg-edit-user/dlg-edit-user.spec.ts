import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEditUser } from './dlg-edit-user';

describe('DlgEditUser', () => {
  let component: DlgEditUser;
  let fixture: ComponentFixture<DlgEditUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgEditUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgEditUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
