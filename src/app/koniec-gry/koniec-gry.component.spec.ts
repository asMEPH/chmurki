import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoniecGryComponent } from './koniec-gry.component';

describe('KoniecGryComponent', () => {
  let component: KoniecGryComponent;
  let fixture: ComponentFixture<KoniecGryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoniecGryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoniecGryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
