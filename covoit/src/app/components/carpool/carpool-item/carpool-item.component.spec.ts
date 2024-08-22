import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolItemComponent } from './carpool-item.component';

describe('CarpoolItemComponent', () => {
  let component: CarpoolItemComponent;
  let fixture: ComponentFixture<CarpoolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
