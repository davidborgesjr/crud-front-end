import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRecordsComponent } from './show-records/show-records.component';
import { AddEditRecordsComponent } from './add-edit-records/add-edit-records.component';
import {PeopleService} from "./services/people.service";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {PeopleRoutingModule} from "./people-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    ShowRecordsComponent,
    AddEditRecordsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PeopleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
