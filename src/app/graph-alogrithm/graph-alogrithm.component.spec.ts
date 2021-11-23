import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAlogrithmComponent } from './graph-alogrithm.component';

describe('GraphAlogrithmComponent', () => {
  let component: GraphAlogrithmComponent;
  let fixture: ComponentFixture<GraphAlogrithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphAlogrithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAlogrithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
