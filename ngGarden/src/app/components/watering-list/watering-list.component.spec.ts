import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringListComponent } from './watering-list.component';

describe('WateringListComponent', () => {
  let component: WateringListComponent;
  let fixture: ComponentFixture<WateringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WateringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WateringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
