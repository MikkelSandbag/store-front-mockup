System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Bag o' Coffee";
                    this.propertiesList = {
                        id: 1,
                        description: "You're only supposed to blow the bloody doors off! you wouldn't hit a man with no trousers on, would you? brain freeze. alrighty then yes, i used a machine gun. kinda hot in these rhinos. here she comes to wreck the day. i took a viagra, got stuck in me throat, i've had a stiff neck for hours. we're going for a ride on the information super highway. excuse me, i'd like to ass you a few questions. your entrance was good, his was better. good morning, oh in case i don't see you, good afternoon, good evening and goodnight.",
                        rating: 4
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <section class=\"cardWrapper\" id=\"fs-card{{propertiesList.id}}\">\n        <img id=\"fs-prodImage{{propertiesList.id}}\" src=\"http://www.prestigespringwater.com/images/coffee/Coffee_Bag_2.jpg\" alt=\"coffee bag\">\n        <h3 id=\"fs-card{{propertiesList.id}}-prodTitle\"><a href=\"#\">{{name}}</a></h3>\n        <div class=\"ratingWrapper\" id=\"fs-ratingWrapper{{propertiesList.id}}\">\n            <i class=\"fa fa-star\"></i>\n            <i class=\"fa fa-star\"></i>\n            <i class=\"fa fa-star\"></i>\n            <i class=\"fa fa-star\"></i>\n            <i class=\"fa fa-star-o\"></i>\n        </div>\n        <p id=\"fs-description{{propertiesList.id}}\">{{propertiesList.description}}</p>\n        <button id=\"fs-moreLink1\">More info</button>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map