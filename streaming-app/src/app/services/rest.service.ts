import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentResponse } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = "http://localhost:5000/"
  constructor
  (
    private httpclient: HttpClient
  ) { }


  getContentLists(){
    return this.httpclient.get<ContentResponse>(this.url + "contentList");
  }
}

