import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontCardComponent } from './font-card.component';

describe('FontDisplayComponent', () => {
  let component: FontCardComponent;
  let fixture: ComponentFixture<FontCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
