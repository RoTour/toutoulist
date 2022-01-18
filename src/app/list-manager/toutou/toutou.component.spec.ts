import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutouComponent } from './toutou.component';

describe('ToutouComponent', () => {
  let component: ToutouComponent;
  let fixture: ComponentFixture<ToutouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToutouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
