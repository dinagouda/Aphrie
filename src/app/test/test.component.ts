import { Component, OnInit } from '@angular/core';

import {freeApiService} from '../freeapi.service';
import { comment } from '../classes/comment';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public comments =[];
  constructor(private _freeApiService: freeApiService){

  }
lstcomments:comment[];

  ngOnInit(){
   this._freeApiService.getcomment()
   .subscribe(data => this.comments= data);

   

    
  }

}
