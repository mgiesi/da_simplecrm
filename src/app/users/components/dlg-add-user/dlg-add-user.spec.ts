import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgAddUser } from './dlg-add-user';

describe('DlgAddUser', () => {
  let component: DlgAddUser;
  let fixture: ComponentFixture<DlgAddUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgAddUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgAddUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
