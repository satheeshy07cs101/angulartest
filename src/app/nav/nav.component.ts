import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import {Data} from '../data.model';
import { benifits, health, process, questions, risks } from '../reducers/nav.action';
import { DOCUMENT} from '@angular/common';

interface Appdata{
data:Data,
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent   {

  mysidebar = 'z-index:3;width:250px';
  myoverlay  = 'cursor:pointer';
  
  
  constructor(private store: Store<Appdata>){

  }
   
  process()
  {
    console.log('in process method');    
    this.store.dispatch(process());  
  }
  benifits(){
    console.log('in benifits method');    
    this.store.dispatch(benifits()); 
  }
  risks(){
    this.store.dispatch(risks());
  }
  health(){
    this.store.dispatch(health())
  }

  shipment(){
    this.store.dispatch(questions())
  }




  w3_open(){
   // console.log('triggered');
   this.mysidebar = 'z-index:3;width:250px; display:block';
   this.myoverlay = 'cursor:pointer; display:block';
  }

  w3_close(){
    this.myoverlay = 'cursor:pointer; display:none';
    this.mysidebar = 'z-index:3;width:250px; display:none';
  }


}
