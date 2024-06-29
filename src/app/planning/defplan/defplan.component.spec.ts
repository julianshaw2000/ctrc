import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefplanComponent } from './defplan.component';

describe('DefplanComponent', () => {
  let component: DefplanComponent;
  let fixture: ComponentFixture<DefplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
