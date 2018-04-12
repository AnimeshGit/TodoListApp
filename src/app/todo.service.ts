import { Injectable } from '@angular/core';
import { BaseURL } from './BaseURL';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TodoService {
  Api_url = '';
  
  constructor(private http: Http) { 
    this.Api_url = BaseURL.hostPath;
  } 

  public addItems(params) {
    return this.http.post(this.Api_url + '/addItems', params).map(data => data.json());
  }

  public getItems() {
    return this.http.get(this.Api_url + '/getItems').map(data => data.json());
  }


  public deleteItem(params){
    return this.http.delete(this.Api_url + '/deleteItem/'+params).map(data => data.json());
  }


}
