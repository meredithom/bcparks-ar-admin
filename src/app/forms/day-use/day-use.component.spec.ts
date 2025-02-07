import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayUseComponent } from './day-use.component';

describe('DayUseComponent', () => {
  let component: DayUseComponent;
  let fixture: ComponentFixture<DayUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
