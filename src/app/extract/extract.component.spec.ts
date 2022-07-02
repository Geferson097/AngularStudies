import { ComponentFixture, TestBed } from '@angular/core/testing';

import { extractComponent } from './extract.component';

describe('extractComponent', () => {
  let component: extractComponent;
  let fixture: ComponentFixture<extractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ extractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(extractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
