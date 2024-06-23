
import {createElement} from '../render.js';

function eventDetailsTemplate() {
  return '<section class="event__details"></section>';
}

export default class EventDetails {
  getTemplate() {
    return eventDetailsTemplate();
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
