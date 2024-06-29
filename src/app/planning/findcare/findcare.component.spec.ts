import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcareComponent } from './findcare.component';

describe('FindcareComponent', () => {
  let component: FindcareComponent;
  let fixture: ComponentFixture<FindcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindcareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
