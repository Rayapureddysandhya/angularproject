import {Http} from '@angular/http'
import {Injectable} from '@angular/core';
@Injectable()
export class course{

    constructor(private http: Http){

    }

   

    RegisterPost(data){
        return this.http.post('http://localhost:3019/api/register',data);
    }
   loginPost(data){
        return this.http.post('http://localhost:3019/api/register',data);
    }
}
