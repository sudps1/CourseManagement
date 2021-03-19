import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenotificationsComponent } from './coursenotifications.component';

describe('CoursenotificationsComponent', () => {
  let component: CoursenotificationsComponent;
  let fixture: ComponentFixture<CoursenotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursenotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursenotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
