import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSejoursComponent } from './carousel-sejours.component';

describe('CarouselSejoursComponent', () => {
  let component: CarouselSejoursComponent;
  let fixture: ComponentFixture<CarouselSejoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselSejoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSejoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
