import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarScannComponent } from './bar-scann.component';

describe('BarScannComponent', () => {
  let component: BarScannComponent;
  let fixture: ComponentFixture<BarScannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarScannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarScannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
