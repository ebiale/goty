import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorGraphBarComponent } from './hor-graph-bar.component';

describe('HorGraphBarComponent', () => {
  let component: HorGraphBarComponent;
  let fixture: ComponentFixture<HorGraphBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorGraphBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorGraphBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
