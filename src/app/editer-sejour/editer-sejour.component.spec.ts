import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerSejourComponent } from './editer-sejour.component';

describe('EditerSejourComponent', () => {
  let component: EditerSejourComponent;
  let fixture: ComponentFixture<EditerSejourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerSejourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
