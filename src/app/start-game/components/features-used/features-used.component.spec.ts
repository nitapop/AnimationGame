import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesUsedComponent } from './features-used.component';

describe('FeaturesUsedComponent', () => {
  let component: FeaturesUsedComponent;
  let fixture: ComponentFixture<FeaturesUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesUsedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
