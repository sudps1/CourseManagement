import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfsignupComponent } from './profsignup.component';

describe('ProfsignupComponent', () => {
  let component: ProfsignupComponent;
  let fixture: ComponentFixture<ProfsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
