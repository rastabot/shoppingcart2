import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../one-product-detail';
import { ProductsDataService } from '../products-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() product: Product;
  products: Product[];


  constructor(
    private route: ActivatedRoute,
    private productService: ProductsDataService,
    private location: Location
  ) { }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  getProducts():void {
    this.productService.getProducts()
    .subscribe(products => this.products = products.slice(1,3))
  }

  ngOnInit():void {
    this.getProduct();
    this.getProducts();
  }

  goBack(): void {
    this.location.back();
  }

}
