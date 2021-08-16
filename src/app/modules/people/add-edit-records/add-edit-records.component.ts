import {Component, Inject, OnInit} from '@angular/core';
import {EDisplayColumnNames} from "../models/types/column-display-name.enum";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPeople} from "../models/interfaces/people-interface";
import {PeopleService} from "../services/people.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-edit-records',
  templateUrl: './add-edit-records.component.html',
  styleUrls: ['./add-edit-records.component.css']
})
export class AddEditRecordsComponent implements OnInit {

  readonly eDisplayColumnNames = EDisplayColumnNames;

  // @ts-ignore
  registerForm: FormGroup;
  // @ts-ignore
  personData: IPeople;


    constructor( public dialogRef: MatDialogRef<AddEditRecordsComponent>,
               // @ts-ignore
               @Inject(MAT_DIALOG_DATA) public data,
               private fb: FormBuilder,
               private peopleService: PeopleService,
               private toastr: ToastrService) {
    this.setRegisterForm();
  }

  ngOnInit(): void {
    this.data.isEdit ? this.setRegisterFormOnEditDialog() : this.setRegisterForm();
  }

  onClickBtnSave() {
    if(this.registerForm.valid) {
      this.data.isEdit ? this.updatePerson() : this.createPerson();
    }
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  private setRegisterForm(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      birth_at: ['', Validators.required],
      id: ['']
    });
  }

  private setRegisterFormOnEditDialog(): void {
    this.personData = this.data.personData;
    const controlsConfig = {
      name: [this.personData.name, Validators.required],
      email: [this.personData.email, Validators.required],
      phone: [this.personData.phone, Validators.required],
      birth_at: [this.personData.birth_at, Validators.required],
      id: [this.personData.id]
    }
    this.registerForm = this.fb.group(controlsConfig);
  }

  private updatePerson(): void {
      this.peopleService.updatePerson(this.registerForm.value, this.registerForm.value.id).pipe().subscribe(person => {
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.dialogRef.close(person);
      });
  }

  private createPerson(): void {
      this.peopleService.updatePerson(this.registerForm.value, this.registerForm.value.id);
  }

}
