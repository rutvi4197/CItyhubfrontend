import { Component, OnInit } from '@angular/core';
import { Venueclass } from '../shared/venueclass';
import { Cityclass } from '../shared/cityclass';
import { VenuedataService } from '../shared/venuedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvenue',
  templateUrl: './addvenue.component.html',
  styleUrls: ['./addvenue.component.css']
})
export class AddvenueComponent implements OnInit {

public cityarr:Cityclass[]=[];
public venue_name:string;
public venue_address:string;
public pk_city_id:number;
public pincode:number;

  constructor(private _venuedataservice:VenuedataService,private _router:Router) { }

  ngOnInit() {
  
  
    this._venuedataservice.getAllCity().subscribe(
      (data:Cityclass[])=>{
         this.cityarr=data;
      },
      function(error){},
      function()
      {
       console.log("city get")
      }
    );
  }

  addVenue()
  {
    this._venuedataservice.addVenue(new Venueclass(0,this.venue_name,this.venue_address,this.pk_city_id,this.pincode))
    .subscribe(
      (data:any)=>{
         this._router.navigate(['/allvenue']);
      },
      function(error){},
      function()
      {
        alert("Added");
      }
    );
  }


}
