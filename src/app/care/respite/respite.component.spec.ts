import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiteComponent } from './respite.component';

describe('RespiteComponent', () => {
  let component: RespiteComponent;
  let fixture: ComponentFixture<RespiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
