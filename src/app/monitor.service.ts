import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(
    private http: HttpClient
  ) { }

  async getContainers(ip) {
    const url = `http://${ip}/containers/json`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }

}
