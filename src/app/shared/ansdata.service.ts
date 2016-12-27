import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response,Headers } from '@angular/http';
import { Ansclass } from './ansclass';
import 'rxjs/Rx';
@Injectable()
export class AnsdataService {
public url:string="http://localhost:3000/ans/"

  constructor() { }

}
