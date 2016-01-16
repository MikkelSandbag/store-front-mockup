import {Component} from 'angular2/core';

interface Properties {
	id: number;
	description: string;
    rating: number;
}

@Component({
    selector: 'my-app',
    template: `
    <div class="cardsFlexWrapper" id="fs-cardsFlexWrapper">
        <section class="cardWrapper" id="fs-card{{propertiesList.id}}">
            <img id="fs-prodImage{{propertiesList.id}}" src="http://www.prestigespringwater.com/images/coffee/Coffee_Bag_2.jpg" alt="coffee bag">
            <h3 id="fs-card{{propertiesList.id}}-prodTitle"><a href="#">{{name}}</a></h3>
            <div class="ratingWrapper" id="fs-ratingWrapper{{propertiesList.id}}">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p id="fs-description{{propertiesList.id}}">{{propertiesList.description}}</p>
            <button id="fs-moreLink1">More info</button>
        </section>
    </div>
    `
})
export class AppComponent {
    public name = "Bag o' Coffee";
    public propertiesList: Properties {
        id: 1,
        description: "You're only supposed to blow the bloody doors off! you wouldn't hit a man with no trousers on, would you? brain freeze. alrighty then yes, i used a machine gun. kinda hot in these rhinos. here she comes to wreck the day. i took a viagra, got stuck in me throat, i've had a stiff neck for hours. we're going for a ride on the information super highway. excuse me, i'd like to ass you a few questions. your entrance was good, his was better. good morning, oh in case i don't see you, good afternoon, good evening and goodnight.",
        rating: 4
    };
}