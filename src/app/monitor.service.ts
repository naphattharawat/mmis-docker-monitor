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
    const url = `https://api.trello.com/1/lists/${cardId}/cards?key=6c45ee2949198256d12ed13583f914f7&token=663c91e3ef66e8a51a47ab47a8ba03d6f3cba06eb601bf65f217410d4dffd859&fields=id,name,badges,labels,idMembers`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }

  async getTrelloMember(memberId) {
    const url = `https://api.trello.com/1/members/${memberId}?fields=fullName,initials,username,status&key=6c45ee2949198256d12ed13583f914f7&token=663c91e3ef66e8a51a47ab47a8ba03d6f3cba06eb601bf65f217410d4dffd859`;
    const resp = await this.http.get(`${url}`).toPromise();
    return resp;
  }


}
