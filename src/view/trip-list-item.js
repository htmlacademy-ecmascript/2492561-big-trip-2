import {createElement} from '../render.js';

function tripListItemTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class EventListItem {
  getTemplate() {
    return tripListItemTemplate();
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
