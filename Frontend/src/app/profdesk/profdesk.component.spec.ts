import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfdeskComponent } from './profdesk.component';

describe('ProfdeskComponent', () => {
  let component: ProfdeskComponent;
  let fixture: ComponentFixture<ProfdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
