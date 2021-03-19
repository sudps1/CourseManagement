import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuddeskComponent } from './studdesk.component';

describe('StuddeskComponent', () => {
  let component: StuddeskComponent;
  let fixture: ComponentFixture<StuddeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuddeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuddeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
