import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowTogetherComponent } from './grow-together.component';

describe('GrowTogetherComponent', () => {
  let component: GrowTogetherComponent;
  let fixture: ComponentFixture<GrowTogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowTogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
