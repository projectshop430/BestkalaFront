import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyphonenumberComponent } from './verifyphonenumber.component';

describe('VerifyphonenumberComponent', () => {
  let component: VerifyphonenumberComponent;
  let fixture: ComponentFixture<VerifyphonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyphonenumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyphonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
