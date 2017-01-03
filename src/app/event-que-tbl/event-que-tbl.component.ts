import { Component, OnInit } from '@angular/core';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService } from '../shared/event-quedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-que-tbl',
  templateUrl: './event-que-tbl.component.html',
  styleUrls: ['./event-que-tbl.component.css']
})
export class EventQueTblComponent implements OnInit {
public quearr:EventQueTbl[]=[];
public delarr:EventQueTbl[]=[];
i:number;
  constructor(private _dataservice:EventQuedataService,private _router:Router) { }

  ngOnInit() {
     this._dataservice.getAllQue().subscribe(
      (data:EventQueTbl[])=>{
        this.quearr=data;
      },
      function(error)
      {

      },
      function()
      {
        console.log("Que get");
      }
    );

  }
  addque()
  {
 this._router.navigate(['/addque']);
  }
  editque(item:EventQueTbl)
  {
    this._router.navigate(['/editque',item.pk_que_id]);
  }
  deleteque(item:EventQueTbl)
  {
    console.log("In delete");
    this._dataservice.deleteQue(item.pk_que_id).subscribe(
    (data:any)=>{
      this.quearr.splice(this.quearr.indexOf(item),1);
    },
    function(error)
    {
        console.log(error);
    },
    function()
    {
    }
    );
  }
  addarr(item:EventQueTbl)
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
    
  this._dataservice.deleteallque(this.delarr).subscribe(
      (data:EventQueTbl[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.quearr.find(x=>x==this.quearr[this.i]))
            {
              this.quearr.splice(this.quearr.indexOf(this.delarr[this.i]),1);
            }
          }
      },
      function(error)
      {
        console.log(error);
      },
      function()
      {
       alert("Successfully Deleted");
      }
    );
  
  }
  goans(item:EventQueTbl)
  {
    this._router.navigate(['/allans',item.pk_que_id]);
  }
}


