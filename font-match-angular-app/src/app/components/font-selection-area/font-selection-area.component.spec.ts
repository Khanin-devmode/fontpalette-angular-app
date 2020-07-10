import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSelectionAreaComponent } from './font-selection-area.component';

describe('SelectionAreaComponent', () => {
  let component: FontSelectionAreaComponent;
  let fixture: ComponentFixture<FontSelectionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSelectionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
