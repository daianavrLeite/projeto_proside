import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { DataService } from '../home/service/data.service';
import { HttpClient } from '@angular/common/http';
import { Coords } from '../models/coords';
import { Observable } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

 
  private allData$:Observable<Coords>;
  map1: any;

  @ViewChild('map1', {read: ElementRef, static: false}) mapRef: ElementRef;

  coods:any[]=[];

  @Input() arr:any[]=[];

  teste : Coords;

  constructor(private data: DataService, private http: HttpClient) { 
  }

  ionViewDidEnter() {
    this.showMap() ;
  }
  addMarkersToMap(arr) {
    for (let eachLocalization of arr) {
    let position = new google.maps.LatLng(eachLocalization.lat, eachLocalization.lng)
      let positionMap = new google.maps.Marker({
        position: position,
        title: eachLocalization.name,
        latitude:eachLocalization.lat,
        longitude:eachLocalization.lng
        
      });      
      positionMap.setMap(this.map1);
    }
  }

  showMap() {
    const location = new google.maps.LatLng(32.64758200, -16.91543200);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map1 = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.arr);
  }

}
