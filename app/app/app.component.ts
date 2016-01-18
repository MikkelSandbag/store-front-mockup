import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from './product.service';

@Component({
  selector: 'my-app',
  template: `
  <div class="cardsFlexWrapper" id="fs-cardsFlexWrapper">
    <section *ngFor="#product of products" 
      (click)="onSelect(product)"
      [class.selected] = "product === selectedProduct" class="cardWrapper" id="fs-card{{product.id}}">
      <img id="fs-prodImage{{product.id}}" src="http://www.prestigespringwater.com/images/coffee/Coffee_Bag_2.jpg" alt="coffee bag">
      <h3 id="fs-card{{product.id}}-prodTitle">{{product.name}}</h3>
      <div class="ratingWrapper" id="fs-ratingWrapper{{product.id}}">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-o"></i>
      </div>
      <p id="fs-description{{product.id}}">{{product.description}}</p>
      <button id="fs-moreLink1">More info</button>
    </section>
  </div>

  <product-detail [product]="selectedProduct"></product-detail>
  `,
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