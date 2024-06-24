import {createElement} from '../render.js';

function tripEventsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class TripEventsList {
  getTemplate() {
    return tripEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
