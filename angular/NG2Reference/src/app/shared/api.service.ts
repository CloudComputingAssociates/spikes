import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; //mtm 11/11/2016; added to reference http module
import { Subject, Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/Rx';

export interface ComputeInstance {
    name: string;
}

@Injectable() export class ApiService {

    title = 'Angular 2 - REST Api Call Example';
    public users: Observable<Array<any>>;

    // endPointURL: string = "http://dogservice.azurewebsites.net/api/values";
    url: string = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) { }

    getComputeInstances() {
        this.http.get(this.url)
            .subscribe((res: Response) => {
                this.users = res.json();
            });
    }
    //private getHeaders() {
    //    let headers = new Headers();
    //    headers.append('Accept', 'application/json');
    //    return headers;
    //}
}

//function mapComputeInstances(response: Response): ComputeInstance[] { 
//    return response.json().results.map(unpackComputeInstance)
//}

//function unpackComputeInstance(item: any): ComputeInstance {
//    let computeInstance = <ComputeInstance>({    // see toPerson(), for more mapping ideas; https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/
//        name: item.Name
//    });                                         
//    return computeInstance;
//}

