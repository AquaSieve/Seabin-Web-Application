import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinProfileComponent } from './bin-profile.component';

describe('BinProfileComponent', () => {
  let component: BinProfileComponent;
  let fixture: ComponentFixture<BinProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
