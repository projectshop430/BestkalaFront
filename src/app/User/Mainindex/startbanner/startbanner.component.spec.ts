import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartbannerComponent } from './startbanner.component';

describe('StartbannerComponent', () => {
  let component: StartbannerComponent;
  let fixture: ComponentFixture<StartbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
