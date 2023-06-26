import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingpageComponent } from './advertisingpage.component';

describe('AdvertisingpageComponent', () => {
  let component: AdvertisingpageComponent;
  let fixture: ComponentFixture<AdvertisingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
