import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  products : Product[] = [];
  constructor(private route: ActivatedRoute,private productService: ProductService) {
      
   }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
      //this.products = this.productService.getProducts();
  this.product = this.productService.getProducts().find( product => product.id === productIdFromRoute);
  console.log(routeParams);
  console.log(productIdFromRoute);
  console.log(this.product);
  }

}
