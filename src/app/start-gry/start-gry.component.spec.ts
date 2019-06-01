import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGryComponent } from './start-gry.component';

describe('StartGryComponent', () => {
  let component: StartGryComponent;
  let fixture: ComponentFixture<StartGryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartGryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartGryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
