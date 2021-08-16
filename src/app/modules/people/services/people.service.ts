import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPeople} from "../models/interfaces/people-interface";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly API_URL = 'https://forassetapi.herokuapp.com/people';

  constructor(private httpService: HttpClient){}

  getAllPeople(): Observable<IPeople[]> {
    return this.httpService.get<IPeople[]>(this.API_URL);
  }

  createPerson(data: IPeople): Observable<IPeople>{
    return this.httpService.post<IPeople>(this.API_URL, data);
  }

  updatePerson(data: IPeople, personId: number): Observable<IPeople> {
    const patchUrl = `${this.API_URL}/${personId}`;
    return this.httpService.patch<IPeople>(patchUrl, data);
  }
}
