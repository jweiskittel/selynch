import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandDesignComponent } from './land-design.component';

describe('LandDesignComponent', () => {
  let component: LandDesignComponent;
  let fixture: ComponentFixture<LandDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
