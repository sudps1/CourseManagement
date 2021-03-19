import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourseformComponent } from './addcourseform.component';

describe('AddcourseformComponent', () => {
  let component: AddcourseformComponent;
  let fixture: ComponentFixture<AddcourseformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcourseformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
