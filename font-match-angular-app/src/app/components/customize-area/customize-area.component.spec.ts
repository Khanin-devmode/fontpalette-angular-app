import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeAreaComponent } from './customize-area.component';

describe('CustomizeAreaComponent', () => {
  let component: CustomizeAreaComponent;
  let fixture: ComponentFixture<CustomizeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
