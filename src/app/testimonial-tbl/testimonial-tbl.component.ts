import { Component, OnInit } from '@angular/core';
import { Testimonialclass } from '../shared/testimonialclass';
import { TestimonialdataService } from '../shared/testimonialdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonial-tbl',
  templateUrl: './testimonial-tbl.component.html',
  styleUrls: ['./testimonial-tbl.component.css']
})
export class TestimonialTblComponent implements OnInit {
i:number;
testarr:Testimonialclass[]=[];
delarr:Testimonialclass[]=[];
  constructor(private _testdata:TestimonialdataService,private _router:Router)
   {

  }

  ngOnInit() {
    this._testdata.getAllTestimonialJoin().subscribe(
      (data:Testimonialclass[])=>{
        this.testarr=data;
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
 addarr(item:Testimonialclass)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else{
      this.delarr.push(item);
    }
  }
  updateTestimonial(item:Testimonialclass)
  {
    this._router.navigate(['/edittestimonial',item.pk_review_id]);
  }
   deleteall()
  {
    console.log("Deleteall");
  this._testdata.deleteAllTestimonial(this.delarr).subscribe(
      (data:Testimonialclass[])=>{
          for(this.i=0;this.i<this.delarr.length;this.i++)
          {
            if(this.testarr.find(x=>x==this.testarr[this.i]))
            {
              this.testarr.splice(this.testarr.indexOf(this.delarr[this.i]),1);
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

  deleteTestimonial(item:Testimonialclass)
  {
    this._testdata.deleteTestimonial(item.pk_review_id).subscribe(
    (data:any)=>{
      this.testarr.splice(this.testarr.indexOf(item),1);
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
