import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudsignupComponent } from './studsignup.component';

describe('StudsignupComponent', () => {
  let component: StudsignupComponent;
  let fixture: ComponentFixture<StudsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
