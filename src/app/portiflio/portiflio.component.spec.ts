import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortiflioComponent } from './portiflio.component';

describe('PortiflioComponent', () => {
  let component: PortiflioComponent;
  let fixture: ComponentFixture<PortiflioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortiflioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortiflioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
