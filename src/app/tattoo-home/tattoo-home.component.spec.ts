import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooHomeComponent } from './tattoo-home.component';

describe('TattooHomeComponent', () => {
  let component: TattooHomeComponent;
  let fixture: ComponentFixture<TattooHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattooHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TattooHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
