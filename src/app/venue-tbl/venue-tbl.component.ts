import { Component, OnInit } from '@angular/core';
import { Venueclass } from '../shared/venueclass';
import { VenuedataService } from '../shared/venuedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-tbl',
  templateUrl: './venue-tbl.component.html',
  styleUrls: ['./venue-tbl.component.css']
})
export class VenueTblComponent implements OnInit {

venuearr:Venueclass[]=[];
public delarr:Venueclass[]=[];
i:number;
  constructor(private _venuedata:VenuedataService,private _router:Router)
   {

  }

  ngOnInit() {
    this._venuedata.getAllVenueJoin().subscribe(
      (data:Venueclass[])=>{
        this.venuearr=data;
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("All Display done");
      }
    );
  }
  addarr(item:Venueclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  
  deleteall()
  {
    console.log("Deleteall");
  this._venuedata.deleteallvenue(this.delarr).subscribe(
      (data:Venueclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.venuearr.find(x=>x==this.venuearr[this.i]))
            {
              this.venuearr.splice(this.venuearr.indexOf(this.delarr[this.i]),1);
            }
          }
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
        console.log("successfully delete");
      }
    );
  
  }

  addVenue()
  {
    this._router.navigate(['/addvenue']);
  }
  updateVenue(item:Venueclass)
  {
    this._router.navigate(['/editvenue',item.pk_venue_id]);
  }
  deleteVenue(item:Venueclass)
  {
    this._venuedata.deleteVenue(item.pk_venue_id).subscribe(
    (data:any)=>{
      this.venuearr.splice(this.venuearr.indexOf(item),1);
    },
    function(error)
    {

    },
    function()
    {
       
   }
    );
  }

}
