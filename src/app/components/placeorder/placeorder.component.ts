import { Component, Inject, Injector, OnInit } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';
import {Router,ActivatedRoute,Routes} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  //order: any = {}
  constructor(public router:Router,private route:ActivatedRoute,private http: HttpClientModule) { }
   handler:any = null;
  ngOnInit(): void {
    this.loadStripe();
  }
//submitted= false;
/*onSubmit(){
 
  this.submitted=true;
}*/
 isSubmitted = false;

pay() {    
 
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51Iw1mHSJ5oN7oKTv4iP45Qp71lhGH9CFYcMqOzDFP8ZIP6s4VVhuC4w0zJ7qcCLMpN4SFfgtqudEYV5LexGImuXi00EWjGyLaj',
    locale: 'auto',
    token: (token: any) => {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      //console.log("token");
     //alert(" This Token Created");
     this.isSubmitted = true;
    },
    
  });
  
  handler.open({
    name: 'Card Details',
    description: 'Purchasing a product',
   
  });
  
}

loadStripe() {
   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }
  
  myStyles = {
    box: true
  }  
  
  
}
  
