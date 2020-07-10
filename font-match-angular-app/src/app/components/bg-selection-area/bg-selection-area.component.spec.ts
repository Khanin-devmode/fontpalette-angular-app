import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSelectionAreaComponent } from './bg-selection-area.component';

describe('BgSelectionAreaComponent', () => {
  let component: BgSelectionAreaComponent;
  let fixture: ComponentFixture<BgSelectionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgSelectionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
