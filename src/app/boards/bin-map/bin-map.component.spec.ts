import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinMapComponent } from './bin-map.component';

describe('BinMapComponent', () => {
  let component: BinMapComponent;
  let fixture: ComponentFixture<BinMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
