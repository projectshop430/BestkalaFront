import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcompleteComponent } from './shopcomplete.component';

describe('ShopcompleteComponent', () => {
  let component: ShopcompleteComponent;
  let fixture: ComponentFixture<ShopcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
