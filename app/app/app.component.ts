import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
  inputs: ['product'],
  directives: [ProductDetailComponent],
  providers: [ProductService]
})

export class AppComponent implements OnInit {
  public title = 'The Coffee Shoppe';
  public products: Product[];
  public selectedProduct: Product;

  constructor(private _productService: ProductService) { }

  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product) { this.selectedProduct = product; }
}