import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Venueclass } from '../shared/venueclass';
import { VenuedataService } from '../shared/venuedata.service';
import { Subscription } from 'rxjs/Rx';
import { Cityclass } from '../shared/cityclass';

@Component({
  selector: 'app-updatevenue',
  templateUrl: './updatevenue.component.html',
  styles: []
})
export class UpdatevenueComponent implements OnInit {

public cityarr:Cityclass[]=[];
public _subscription:Subscription;
public venuearr:Venueclass[]=[];
public pk_venue_id:number;
public venue_name:string;
public venue_address:string;
public pk_city_id:number;
public pincode:number;

  constructor(private _venuedataservice:VenuedataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

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
  
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_venue_id=params["id"];
       
      }
    );
    this._venuedataservice.getVenuebyId(this.pk_venue_id).subscribe(
      (data:Venueclass[])=>{
        this.venuearr=data;
        this.venue_name=this.venuearr[0].venue_name;
        this.venue_address=this.venuearr[0].venue_address;
        this.pk_city_id=this.venuearr[0].fk_city_id;
        this.pincode=this.venuearr[0].pincode;

    },
      function(error)
      {

      },
      function()
      {
        console.log("successfully get in edit");
      }
    );
  }
updateVenue()
{
  this._venuedataservice.updateVenue(new Venueclass(this.pk_venue_id,this.venue_name,this.venue_address,this.pk_city_id,this.pincode)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allvenue']);
    },
    function(error)
    {

    },
    function()
    {
      console.log("edited");
    }
  );
}
}
