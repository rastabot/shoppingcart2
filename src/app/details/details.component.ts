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

  ngOnInit():void {
    this.getProduct();
  }

  goBack(): void {
    this.location.back();
  }

}
