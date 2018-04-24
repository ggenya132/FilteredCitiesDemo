import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CityService {

  endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  constructor(private httpClient: HttpClient) {
  }

  getCities() {
    return this.httpClient.get(this.endpoint);
  }
}
