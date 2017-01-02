import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Testimonialclass } from '../shared/testimonialclass';
import { TestimonialdataService } from '../shared/testimonialdata.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styles: []
})
export class UpdatetestComponent implements OnInit {

public _subscription:Subscription;
public testarr:Testimonialclass[]=[];
public pk_review_id:number;
public fk_email_id:string;
public review_desc:string;
public review_like:number;

  constructor(private _testdataservice:TestimonialdataService,private _router:Router,private _acrouter:ActivatedRoute ) { }

   ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(
      (params:any)=>{
        this.pk_review_id=params["id"];
       
      }
    );
    this._testdataservice.getTestimonialById(this.pk_review_id).subscribe(
      (data:Testimonialclass[])=>{
        this.testarr=data;
        this.review_desc=this.testarr[0].review_desc;
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

updateTestimonial()
{
  this._testdataservice.updateTestimonial(new Testimonialclass(this.pk_review_id,this.fk_email_id,this.review_desc,this.review_like)).subscribe(
    (data:any)=>
    {
      this._router.navigate(['/allreview']);
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
