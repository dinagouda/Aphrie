import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { comment } from './classes/comment';


@Injectable()
export class freeApiService
{
    private _url: string ="/assets/data/comments.json";
    constructor (private http :HttpClient) {}
    getcomment (): Observable<comment[]>{
        return this.http.get<comment[]>(this._url);

    }
}