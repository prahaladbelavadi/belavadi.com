import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencesComponent } from './influences.component';

describe('InfluencesComponent', () => {
  let component: InfluencesComponent;
  let fixture: ComponentFixture<InfluencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
