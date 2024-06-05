import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanDataTableComponent } from './ocean-data-table.component';

describe('OceanDataTableComponent', () => {
  let component: OceanDataTableComponent;
  let fixture: ComponentFixture<OceanDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
