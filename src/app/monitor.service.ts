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
    const url = `http://${ip}/containers/json?all=1`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }

  async getTrelloList(cardId) {
    const url = `https://api.trello.com/1/lists/${cardId}/cards?key=6c45ee2949198256d12ed13583f914f7&token=940de963a5fc9799ec812c8a0232fdf6e25c282b7764ba6eac3f5d692dc33d70&fields=id,name,badges,labels,idMembers`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }

  async getTrelloMember(memberId) {
    const url = `https://api.trello.com/1/members/${memberId}?fields=fullName,initials,username,status&key=6c45ee2949198256d12ed13583f914f7&token=940de963a5fc9799ec812c8a0232fdf6e25c282b7764ba6eac3f5d692dc33d70`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }


}
