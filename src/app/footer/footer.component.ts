import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { Order } from '../order.model';
import {reset} from '../reducers/user.action';
import {HttpClient} from '@angular/common/http';

interface Appdata{
  order:Order
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  username:string = '';
  usercontact:string = '';
  orderdetails:string = '';
  order:Observable<Order>;
  totalorder:number = 0;


  //latest order details
  coconutod:number =0;
  groundnutod:number=0;
  flaxseedod:number=0;
  sesameod:number=0;

orderconfirmationstyle ={};

  constructor(private store:Store<Appdata>, private dataservice:DataserviceService, private http: HttpClient ) {
    this.order = this.store.select('order');
    this.order.subscribe(data => { this.totalorder = data.coconutoil*200 + data.flaxseedoil*200 +data.groundnutoil*300+data.sesameoil*300
                                   if(this.totalorder>0){
                                     this.coconutod = data.coconutoil;
                                     this.groundnutod = data.groundnutoil;
                                     this.flaxseedod = data.flaxseedoil;
                                     this.sesameod= data.sesameoil;
                                     this.orderdetails = 'Order summary: \n\n'
                                     if(data.coconutoil >0) this.orderdetails = this.orderdetails+ 'coconutoil ' +data.coconutoil +'Ltr: '+data.coconutoil*400+' Rupees \n'
                                     if(data.groundnutoil >0) this.orderdetails = this.orderdetails+ 'groundnutoil ' +data.groundnutoil +'Ltr: '+data.groundnutoil*320+' Rupees \n'
                                     if(data.flaxseedoil >0) this.orderdetails = this.orderdetails+ 'flaxseedoil ' +data.flaxseedoil +'Ltr: '+data.flaxseedoil*800+' Rupees \n'
                                     if(data.sesameoil >0) this.orderdetails = this.orderdetails+ 'sesameseedoil ' +data.sesameoil +'Ltr: '+data.sesameoil*500+' Rupees \n'
                                     if(data.coconutoil >0 || data.groundnutoil >0|| data.flaxseedoil >0 || data.sesameoil>0){
                                      let totalamount = data.coconutoil*400+data.groundnutoil*320+data.flaxseedoil*800+data.sesameoil*500;
                                      this.orderdetails = this.orderdetails+'\n Total amount: '+totalamount+' Rupees';
                                     } 
                                   }else{
                                     this.orderdetails = '';
                                     this.username = '';
                                     this.usercontact ='';
                                   }  })
   }

  ngOnInit() {
  }

  submit()
  {
    console.log('triggered submit in footer')
    console.log(this.username);
    console.log(this.usercontact);
    let obj: Order = {
      name:this.username,
      contact:this.usercontact,
      coconutoil:this.coconutod,
      groundnutoil:this.groundnutod,
      flaxseedoil:this.flaxseedod,
      sesameoil:this.sesameod
    }
    this.dataservice.createOrder(obj);
    let sub = this.http.post('https://formspree.io/f/xpzkpzlz',  obj).subscribe( res => console.log(res));
    this.store.dispatch(reset());
   this. orderconfirmationstyle = {display:'block'};
  // sub.unsubscribe();
  }

  canclepopup(){
    console.log('in cancel pop method');
    
    this. orderconfirmationstyle = {display:'none'};
  }

}
