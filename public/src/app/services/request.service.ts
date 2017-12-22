import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RequestService {
  public host: string;

  constructor(private http: HttpClient) {
    this.host = environment.host;
  }

  get(url): string {
    let result = "";
    this.http.get([this.host, url].join("/"))
      .subscribe(res => result = res.toString());
    return result;
  }

  post(url, body: any): string {
    console.log(url, body, [this.host,url].join("/"));
    let result = "";
    this.http.post([this.host, url].join("/"), JSON.stringify({body}))
      .subscribe(res => result = res.toString());
    return result;
  }
}
