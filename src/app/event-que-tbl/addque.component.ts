import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService} from '../shared/event-quedata.service';
import { Eventclass } from '../shared/eventclass';

@Component({
  selector: 'app-addque',
  templateUrl: './addque.component.html',
  styles: []
})
export class AddqueComponent implements OnInit {
public quearr:EventQueTbl=new EventQueTbl(0,'',0,'','','','','','',0,'','');
public eventarr:Eventclass[]=[];
public pk_event_id:number;
  constructor(private _dataservice:EventQuedataService,private _router:Router) { }

  ngOnInit() {
  this._dataservice.getAllEvent().subscribe(
      (data:any)=>{
        this.eventarr=data;
},
function(error){
  console.log(error);
},
function()
{

}
  );
  }

  
   addque()
  {
      this.quearr.fk_event_id=this.pk_event_id;
    this._dataservice.addque(this.quearr).subscribe(
      (data:any)=>{
        this._router.navigate(['/allque']);
},
function(error){
  console.log(error);
},
function()
{

}
  );
  }


}
