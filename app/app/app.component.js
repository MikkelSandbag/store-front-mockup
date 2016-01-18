System.register(['angular2/core', './product-detail.component', './product.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_detail_component_1, product_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_productService) {
                    this._productService = _productService;
                    this.title = 'The Coffee Shoppe';
                }
                AppComponent.prototype.getProducts = function () {
                    var _this = this;
                    this._productService.getProducts().then(function (products) { return _this.products = products; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                AppComponent.prototype.onSelect = function (product) { this.selectedProduct = product; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"cardsFlexWrapper\" id=\"fs-cardsFlexWrapper\">\n    <section *ngFor=\"#product of products\" \n      (click)=\"onSelect(product)\"\n      [class.selected] = \"product === selectedProduct\" class=\"cardWrapper\" id=\"fs-card{{product.id}}\">\n      <img id=\"fs-prodImage{{product.id}}\" src=\"http://www.prestigespringwater.com/images/coffee/Coffee_Bag_2.jpg\" alt=\"coffee bag\">\n      <h3 id=\"fs-card{{product.id}}-prodTitle\">{{product.name}}</h3>\n      <div class=\"ratingWrapper\" id=\"fs-ratingWrapper{{product.id}}\">\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star\"></i>\n        <i class=\"fa fa-star-o\"></i>\n      </div>\n      <p id=\"fs-description{{product.id}}\">{{product.description}}</p>\n      <button id=\"fs-moreLink1\">More info</button>\n    </section>\n  </div>\n\n  <product-detail [product]=\"selectedProduct\"></product-detail>\n  ",
                        inputs: ['product'],
                        directives: [product_detail_component_1.ProductDetailComponent],
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map