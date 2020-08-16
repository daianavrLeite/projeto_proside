import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Coords } from '../models/coords';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private data: DataService) {}

  private allData$:Observable<Coords>;
  arr:any[]=[];

  /*redirect(){
    this.router.navigate(['/map']);
  }*/
  
  ionViewDidEnter() {
    this.getArray() ;
  }

  getArray(){
    this.allData$= this.data.getAllData();
     this.allData$.subscribe(result=>{
       console.log("tudo", result);
       result.list.map(value=>{
         this.arr.push(value);
       })
        console.log("ARR", this.arr);
     })
   }


}
