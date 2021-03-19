import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrequestComponent } from './subrequest.component';

describe('SubrequestComponent', () => {
  let component: SubrequestComponent;
  let fixture: ComponentFixture<SubrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
