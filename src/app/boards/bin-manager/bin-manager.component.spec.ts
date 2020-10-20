import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinManagerComponent } from './bin-manager.component';

describe('BinManagerComponent', () => {
  let component: BinManagerComponent;
  let fixture: ComponentFixture<BinManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
