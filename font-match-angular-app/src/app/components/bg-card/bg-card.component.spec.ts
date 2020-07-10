import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCardComponent } from './bg-card.component';

describe('BgCardComponent', () => {
  let component: BgCardComponent;
  let fixture: ComponentFixture<BgCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
