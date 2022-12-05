import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  constructor(private httpClient: HttpClient) { }

  public getSidebarMenu(){
    return this.httpClient.get(`http://localhost:3000/Posts`);
  }
}
