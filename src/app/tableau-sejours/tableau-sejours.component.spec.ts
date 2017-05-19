import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauSejoursComponent } from './tableau-sejours.component';

describe('TableauSejoursComponent', () => {
  let component: TableauSejoursComponent;
  let fixture: ComponentFixture<TableauSejoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauSejoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauSejoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
