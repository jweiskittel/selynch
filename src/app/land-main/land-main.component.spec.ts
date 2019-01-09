import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandMainComponent } from './land-main.component';

describe('LandMainComponent', () => {
  let component: LandMainComponent;
  let fixture: ComponentFixture<LandMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
