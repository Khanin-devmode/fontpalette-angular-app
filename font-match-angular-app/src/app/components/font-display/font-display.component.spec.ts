import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDisplayComponent } from './font-display.component';

describe('FontDisplayComponent', () => {
  let component: FontDisplayComponent;
  let fixture: ComponentFixture<FontDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
