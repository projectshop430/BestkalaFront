import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopporseshComponent } from './shopporsesh.component';

describe('ShopporseshComponent', () => {
  let component: ShopporseshComponent;
  let fixture: ComponentFixture<ShopporseshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopporseshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopporseshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
