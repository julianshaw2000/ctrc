import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefcareComponent } from './defcare.component';

describe('DefcareComponent', () => {
  let component: DefcareComponent;
  let fixture: ComponentFixture<DefcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefcareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
