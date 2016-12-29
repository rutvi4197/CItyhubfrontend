import { Component, OnInit } from '@angular/core';
import { Testimonialclass } from '../shared/testimonialclass';
import { TestimonialdataService } from '../shared/testimonialdata.service';

@Component({
  selector: 'app-testimonial-tbl',
  templateUrl: './testimonial-tbl.component.html',
  styleUrls: ['./testimonial-tbl.component.css']
})
export class TestimonialTblComponent implements OnInit {

testarr:Testimonialclass[]=[];

  constructor(private _testdata:TestimonialdataService)
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
