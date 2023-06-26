import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditlogoComponent } from './creditlogo.component';

describe('CreditlogoComponent', () => {
  let component: CreditlogoComponent;
  let fixture: ComponentFixture<CreditlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditlogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
