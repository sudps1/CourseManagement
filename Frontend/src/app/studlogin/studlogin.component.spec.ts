import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudloginComponent } from './studlogin.component';

describe('StudloginComponent', () => {
  let component: StudloginComponent;
  let fixture: ComponentFixture<StudloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
