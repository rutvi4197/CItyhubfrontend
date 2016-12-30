import { Component, OnInit } from '@angular/core';
import { Venueclass } from '../shared/venueclass';
import { VenuedataService } from '../shared/venuedata.service';

@Component({
  selector: 'app-venue-tbl',
  templateUrl: './venue-tbl.component.html',
  styleUrls: ['./venue-tbl.component.css']
})
export class VenueTblComponent implements OnInit {

venuearr:Venueclass[]=[];

  constructor(private _testdata:VenuedataService)
   {

  }

  ngOnInit() {
    this._testdata.getAllVenueJoin().subscribe(
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


  deleteVenue(item:Venueclass)
  {
    this._testdata.deleteVenue(item.pk_venue_id).subscribe(
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
