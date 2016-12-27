import { Component, OnInit } from '@angular/core';
import { Cityclass } from '../shared/cityclass';
import { CitydataService } from '../shared/citydata.service';

@Component({
  selector: 'app-city-tbl',
  templateUrl: './city-tbl.component.html',
  styleUrls: ['./city-tbl.component.css']
})
export class CityTblComponent implements OnInit {
public cityarr:Cityclass[]=[];
  constructor(private _citydataservice:CitydataService) { }

  ngOnInit() {
    this._citydataservice.getAllCity().subscribe(
      (data:Cityclass[])=>{
          this.cityarr=data;
      },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get");
      }
    );
  }

}
