import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecordsComponent } from './show-records.component';

describe('ShowRecordsComponent', () => {
  let component: ShowRecordsComponent;
  let fixture: ComponentFixture<ShowRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
