import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEditAddress } from './dlg-edit-address';

describe('DlgEditAddress', () => {
  let component: DlgEditAddress;
  let fixture: ComponentFixture<DlgEditAddress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DlgEditAddress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlgEditAddress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
