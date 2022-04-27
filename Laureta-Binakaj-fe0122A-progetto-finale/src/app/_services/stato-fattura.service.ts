import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class StatoFatturaService {

  pathApi: string;

  constructor(private http: HttpClient) {

    this.pathApi = environment.pathApi;
  }

  GetAll(p: number) {
    return this.http.get<any>(this.pathApi + '/api/statifattura?page=' + p + '&size=20&sort=id,ASC');
  }
}

