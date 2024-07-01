(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}class i{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n      </div>\n\n      <p class="trip-info__cost">\n        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n      </p>\n    </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class n{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function a(e){return Math.floor(Math.random()*e)}function r(e){return e[Math.floor(Math.random()*e.length)]}const l=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808a",description:"Moscow is the capital city of Russia and its political, economic, cultural, and scientific center. It is known for its historical and architectural landmarks, such as the Kremlin and Red Square. Moscow is also home to numerous theaters, museums, and universities.",name:"Moscow",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808b",description:"Saint Petersburg, often referred to as Russia's cultural capital, is renowned for its stunning architecture and extensive network of canals. The city boasts the Hermitage Museum, one of the world's largest and oldest museums. It is also famous for its White Nights during the summer months.",name:"Saint Petersburg",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",description:"Novosibirsk is the largest city in Siberia and an important industrial and cultural hub. It is known for its impressive railway bridge over the Ob River and the massive Novosibirsk Opera and Ballet Theatre. The city is also a gateway to exploring Russian Siberia.",name:"Novosibirsk",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808d",description:"Yekaterinburg is located on the eastern side of the Ural Mountains and is considered the industrial and cultural center of the region. It is famously known as the place where the last Tsar of Russia, Nicholas II, and his family were executed. Today, it is a vibrant city with numerous museums and theaters.",name:"Yekaterinburg",pictures:[]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808e",description:"",name:"Nizhny Novgorod",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808f",description:"Kazan is the capital of the Republic of Tatarstan and is known for its rich Tatar culture and history. The Kazan Kremlin is a UNESCO World Heritage site and houses both a mosque and an Orthodox cathedral. The city is also a major center for higher education and sports.",name:"Kazan",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808j",description:"",name:"Samara",pictures:[]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808h",description:"Omsk is one of the largest cities in Siberia and a key industrial hub. The city is known for its rich cultural life, including numerous theaters, museums, and historical monuments. Omsk also has a notable architectural heritage, blending various styles from different eras.",name:"Omsk",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808i",description:"Rostov-on-Don is a port city and administrative center of Rostov Oblast. It is an important cultural and economic hub in southern Russia. The city is known for its vibrant cultural scene, including theaters, museums, and festivals, as well as its diverse cuisine.",name:"Rostov-on-Don",pictures:[{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""},{src:`https://loremflickr.com/248/152?random=${a(1e3)}`,description:""}]},{id:"f4b62099-293f-4c3d-a702-94eec4a2808j",description:"Ufa is the capital of the Republic of Bashkortostan and lies at the confluence of the Belaya and Ufa rivers. The city is known for its rich cultural diversity and beautiful natural surroundings. Ufa is also a significant center for oil refining and mechanical engineering industries.",name:"Ufa",pictures:[]}];class o{constructor({point:e}){this.point=e}getTemplate(){return function(e){const{type:t,offers:i,destination:n,basePrice:s,isFavorite:a}=e;return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">MAR 18</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${t} ${l.find((e=>e.id===n)).name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${s}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${i.filter((e=>!0===e.isChoosen)).map((e=>function({title:e,price:t}){return`<li class="event__offer">\n      <span class="event__offer-title">${e}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t}</span>\n    </li>`}(e))).join("")}\n        </ul>\n        <button class="event__favorite-btn ${a&&"event__favorite-btn--active"}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class c{constructor({edit:e}){this.edit=e}getTemplate(){return function(e){const{type:t,destination:i,basePrice:n}=e;return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${t}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l.find((e=>e.id===i)).name}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${l.map((e=>function({name:e}){return`<option value="${e}"></option>`}(e))).join("")}\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${n}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n        </section>\n      </form>\n    </li>`}(this.edit)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class d{constructor({offers:e}){this.offers=e}getTemplate(){return(e=this.offers)&&e.length?`<section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n        <div class="event__available-offers">\n        ${e.map((e=>function({title:e,price:t,isChoosen:i}){return`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${i&&"checked"}>\n      <label class="event__offer-label" for="event-offer-luggage-1">\n        <span class="event__offer-title">${e}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t}</span>\n      </label>\n    </div>`}(e))).join("")}\n        </div>\n      </section>`:"<div></div>";var e}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function p({src:e,description:t}){return`\n  <img class="event__photo" src=${e} alt=${t}>\n  `}class m{constructor({destination:e}){this.destination=e}getTemplate(){return function(e){const{description:t,pictures:i}=e;return p(i),""!==t||i&&i.length?`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${t}</p>\n      ${function({pictures:e}){return e&&e.length?`<div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${e.map((e=>p(e))).join()}\n        </div>\n      </div>`:"<div></div>"}(e)}\n    </section>`:"<div></div>"}(this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3a",title:"Upgrade to a business class",price:35,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3b",title:"Im in a hurry",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3c",title:"Choose music station",price:5,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3d",title:"Add an intermediate point",price:10,isChoosen:Math.random()>.5}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3e",title:"Add lunch",price:10,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3f",title:"Comfort seats",price:20,isChoosen:Math.random()>.5}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3j",title:"A separate compartment",price:30,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3h",title:"Lunch in the dining car",price:15,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3i",title:"Hygiene supplies",price:10,isChoosen:Math.random()>.5}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3j",title:"Spacious cabin",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3k",title:"Access to the VIP area",price:25,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3o",title:"Lunch at the restaurant",price:30,isChoosen:Math.random()>.5}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3p",title:"A multi-seat car",price:30,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3q",title:"Rent A-Class car",price:40,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3r",title:"Rent S-Class car",price:60,isChoosen:Math.random()>.5}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3s",title:"Switch to comfort class",price:70,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3t",title:"Add meal",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3u",title:"Add luggage",price:30,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3v",title:"Choose seats",price:10,isChoosen:Math.random()>.5}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa3w",title:"Room for two",price:30},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3x",title:"Cleaning",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3y",title:"Breakfast in the room",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa3z",title:"Access to the mini-bar",price:50,isChoosen:Math.random()>.5}]},{type:"sightseeing",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Guide services",price:20,isChoosen:Math.random()>.5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Ready-made routes",price:50,isChoosen:Math.random()>.5}]},{type:"restaurant",offers:[]}],h=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];function u(){const e={id:"",basePrice:a(100),dateFrom:"",dateTo:"",destination:r(l).id,isFavorite:Math.random()>.5,offers:[],type:r(h).toLowerCase()};var t;return e.offers=(t=e.type,v.find((e=>e.type===t)).offers),e}const f=document.querySelector(".page-header").querySelector(".trip-controls"),_=document.querySelector(".trip-events"),b=new class{points=Array.from({length:3},u);edit=u();getPoint(){return this.points}getEdit(){return this.edit}getDestination(){return l.find((e=>e.id===this.edit.destination))}getOffers(){return this.edit.offers}},y=new class{tripControlsContainer=document.querySelector(".trip-main");tripEventsList=new s;constructor({boardContainer:e,pointModel:t}){this.boardContainer=e,this.pointModel=t}initMain(){this.eventPoints=[...this.pointModel.getPoint()],this.eventEdit=this.pointModel.getEdit(),this.eventOffers=this.pointModel.getOffers(),this.eventDestination=this.pointModel.getDestination(),console.log(this.eventDestination),t(new i,this.tripControlsContainer,"afterbegin"),t(new n,this.boardContainer),t(this.tripEventsList,this.boardContainer),t(new c({edit:this.eventEdit}),this.tripEventsList.getElement());const e=document.querySelector(".event__details");t(new d({offers:this.eventOffers}),e),t(new m({destination:this.eventDestination}),e);for(let e=0;e<this.eventPoints.length;e++)t(new o({point:this.eventPoints[e]}),this.tripEventsList.getElement())}}({boardContainer:_,pointModel:b});t(new class{getTemplate(){return'<div class="trip-controls__filters">\n              <h2 class="visually-hidden">Filter events</h2>\n              <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>\n            </div>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},f,"afterbegin"),y.initMain()})();
//# sourceMappingURL=bundle.f2609984fe3d467cad30.js.map