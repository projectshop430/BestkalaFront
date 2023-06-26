import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersignComponent } from './headersign.component';

describe('HeadersignComponent', () => {
  let component: HeadersignComponent;
  let fixture: ComponentFixture<HeadersignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadersignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
