import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaboutComponent } from './defabout.component';

describe('DefaboutComponent', () => {
  let component: DefaboutComponent;
  let fixture: ComponentFixture<DefaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
