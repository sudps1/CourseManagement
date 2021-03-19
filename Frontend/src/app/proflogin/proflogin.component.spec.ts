import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfloginComponent } from './proflogin.component';

describe('ProfloginComponent', () => {
  let component: ProfloginComponent;
  let fixture: ComponentFixture<ProfloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
