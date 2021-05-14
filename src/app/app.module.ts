import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule  } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import {orderReducer} from './reducers/user.action';
import {dataReducer} from './reducers/nav.action';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';


import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [						
    AppComponent,
      NavComponent,
      HeroComponent,
      NewsletterComponent,
      ProductsComponent,
      FooterComponent,
      DetailsComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({order:orderReducer,
                          data:dataReducer}),
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
