import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Userclass } from '../shared/userclass';
import { Cityclass } from '../shared/cityclass';
import { UserdataService } from '../shared/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
public cityarr:Cityclass[]=[];
public pk_email_id:string;
public user_password:string;
public user_mobile_no:string;
public user_photo:string;
public user_name:string;
public pk_city_id:number;
public user_type:string;
 path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];
  constructor(private _userdataservice:UserdataService,private _router:Router,private changeDetectorRef: ChangeDetectorRef) { }
  fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
    this.user_photo=reader.result;
    console.log(reader.result);
  }

  reader.readAsDataURL(file);
}
readFiles(files, index=0){
  // Create the file reader
  let reader = new FileReader();
  
  // If there is a file
  if(index in files){
    // Start reading this file
    this.readFile(files[index], reader, (result) =>{
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = result;
  
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
  
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file). 
        this.file_srcs.push(resized_jpeg);
  
        // Read the next file;
        this.readFiles(files, index+1);
      });
    });
  }else{
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }
}
resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    var width = img.width;
    var height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    var canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    var dataUrl = canvas.toDataURL('image/jpeg');

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
}
  

  ngOnInit() {
  
  
    this._userdataservice.getAllCity().subscribe(
      (data:Cityclass[])=>{
         this.cityarr=data;
         this.pk_city_id=this.cityarr[0].pk_city_id;
      },
      function(error){},
      function()
      {
       console.log("city get")
      }
    );
  

  }


  addUser()
  {
    this._userdataservice.addUser(new Userclass(this.pk_email_id,this.user_password,this.user_mobile_no,this.user_name,this.pk_city_id,this.user_type,this.user_photo))
    .subscribe(
      (data:any)=>{
         this._router.navigate(['/alluser']);
      },
      function(error){},
      function()
      {
        alert("Added");
      }
    );
  }

}
