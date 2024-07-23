import AbstractView from '../framework/view/abstract-view.js';

function createOfferTemplate({title, price, isChoosen}) {
  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isChoosen && 'checked'}>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
}

function renderOffers(offer) {
  if (!offer || !offer.length) {
    return ('<div></div>');
  } else {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offer.map((offerItem) => createOfferTemplate(offerItem)).join('')}
        </div>
      </section>`
    );
  }
}

function eventOffersTemplate(offers) {
  return (`${renderOffers(offers)}`);
}

export default class EventOffers extends AbstractView{
  constructor({offers}) {
    super();
    this.offers = offers;
  }

  get template() {
    return eventOffersTemplate(this.offers);
  }
}
