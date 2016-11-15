import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //mtm 11/11/2016; added to reference http module
import { Subject, Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/Rx';

export interface ComputeInstance {
    name: string;
}

@Injectable() export class ApiService {

    title = 'Angular 2 - REST Api Call Example';

    endPointURL: string = "http://dogservice.azurewebsites.net/api/values";

    constructor(private http: Http) { }

    getComputeInstances() : Observable<ComputeInstance[]>{
        return this.http.get(this.endPointURL, { headers: this.getHeaders() }).map(mapComputeInstances)
    }
    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapComputeInstances(response: Response): ComputeInstance[] { 
    return response.json().results.map(unpackComputeInstance)
}

function unpackComputeInstance(item: any): ComputeInstance {
    let computeInstance = <ComputeInstance>({    // see toPerson(), for more mapping ideas; https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/
        name: item.Name
    });                                         
    return computeInstance;
}

