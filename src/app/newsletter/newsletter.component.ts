import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface Appdata{
  data:Data,
}
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

    header:string = '';
    content:string = '';
    @Input() flag : boolean = false;
    stylecontent = {};
  constructor(private store: Store<Appdata>) {
    this.store.select('data').subscribe(d => {
      this.header = d.header;
      this.content = d.content;
       if(d.display)
       this.stylecontent = {display:'block'} 
     
    })
   }

   canclepop(){
     this.stylecontent = {display:'none'}
   }

  ngOnInit() {


  }

}
