import { Component, OnInit } from '@angular/core';
import { Product } from '../one-product-detail';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products : Product[];
  total:number = 0;
  numberOfItems:number ;
  p: number = 1;


  constructor(private productService : ProductsDataService) {

   }


  getProducts():void {
    this.productService.getProducts()
    .subscribe(products => this.products = products)
  }
  ngOnInit() {
    this.getProducts();
    this.totalPrice();
    this.totalQuantity ()
  }
// for pipe filter 
filtername="";

//===buttons functions
  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * 
        this.products[i].product_quantity);
    }
  }

  totalQuantity (){
    this.numberOfItems=0;
    for(var i=0;i<this.products.length;i++){
      this.numberOfItems += this.products[i].product_quantity
    }

  }


  add(pid: Number){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quantity += 1;
      }           
    }
    this.totalPrice();
    this.totalQuantity();
    console.log(this.products);
  }

  del(pid: Number){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid && this.products[i].product_quantity>0)
      {  
        this.products[i].product_quantity -= 1;
        
      }           
    }
    this.totalPrice();
    this.totalQuantity();
    console.log(this.products);
  }

  delpopup(pid: Number){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
      }           
    }
    this.totalPrice();
    this.totalQuantity();
    console.log(this.products);
  }




}
