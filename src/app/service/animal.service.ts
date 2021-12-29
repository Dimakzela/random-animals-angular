import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Animal} from "../model/animal";
import {environment} from "../../environments/environment";

@Injectable({providedIn: "root"})
export class AnimalService {
  private baseURL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAnimals(count: number): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.baseURL + `animals?count=${count}`);
  }
}
