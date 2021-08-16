import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../services/people.service";
import {Subscription} from "rxjs";
import {EDisplayColumnNames} from "../models/types/column-display-name.enum";
import {IPeople} from "../models/interfaces/people-interface";
import {EColumnNames} from "../models/types/column-name.enum";
import {MatDialog} from "@angular/material/dialog";
import {AddEditRecordsComponent} from "../add-edit-records/add-edit-records.component";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {

  readonly eDisplayColumnNames = EDisplayColumnNames;
  readonly eColumnNames = EColumnNames;

  columnNames: string[];
  dataSource$: IPeople[] = [];
  isLoading: boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  private subscription = new Subscription();

  constructor(private peopleService: PeopleService,
              public dialog: MatDialog) {
    this.isLoading = true;
    this.columnNames = Object.values(this.eColumnNames);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.peopleService.getAllPeople().pipe().subscribe((responseData: IPeople[]) => {
        this.dataSource$ = responseData;
        this.isLoading = false;
      })
    )
  }

  onClickEditIcon(personData: IPeople): void {
    const config = {
      width: '400px',
      data: {
        personData,
        isEdit: true
      }
    };
    const dialog = this.dialog.open(AddEditRecordsComponent, config);
  }

  onClickBtnAddRecord(): void {
    const config = {
      width: '400px',
      data: {
        isEdit: false
      }
    };
    const dialog = this.dialog.open(AddEditRecordsComponent, config);

  }

  onClickDeleteIcon(numberId: number): void {
    console.log(`Number ID: ${numberId}`);
  }

}
