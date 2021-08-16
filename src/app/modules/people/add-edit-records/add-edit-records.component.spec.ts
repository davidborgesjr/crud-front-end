import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRecordsComponent } from './add-edit-records.component';

describe('AddEditRecordsComponent', () => {
  let component: AddEditRecordsComponent;
  let fixture: ComponentFixture<AddEditRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
