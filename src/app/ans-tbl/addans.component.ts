import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ansclass } from '../shared/ansclass';
import { AnsdataService } from '../shared/ansdata.service';
import { EventQueTbl } from '../shared/event-que-tbl';
import { EventQuedataService } from '../shared/event-quedata.service';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addans',
  templateUrl: './addans.component.html',
  styles: []
})
export class AddansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
