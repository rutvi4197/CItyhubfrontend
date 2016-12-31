import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offerclass } from '../shared/offerclass';
import { OfferdataService } from '../shared/offerdata.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {
public offerarr:Offerclass=new Offerclass(0,'',0,'','',0,'','');
  constructor(private _dataservice:OfferdataService,private _router:Router) { }

  ngOnInit() {
  }
  addoffer()
  {
     this._dataservice.addoffer(this.offerarr).subscribe(
      (data:any)=>{
        this._router.navigate(['/alloffer']);
     });
}

}
