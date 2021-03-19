import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglereqComponent } from './singlereq.component';

describe('SinglereqComponent', () => {
  let component: SinglereqComponent;
  let fixture: ComponentFixture<SinglereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglereqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
