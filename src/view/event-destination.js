import {createElement} from '../render.js';

function createPictureTemplate ({src, description}) {
  return (`
  <img class="event__photo" src=${src} alt=${description}>
  `);
}

function picturesCheck ({pictures}) {
  if (!pictures || !pictures.length) {
    return ('<div></div>');
  } else {
    return (
      `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictures.map((picture) => createPictureTemplate(picture)).join()}
        </div>
      </div>`
    );
  }
}

function eventDestinationTemplate(destination) {
  const {description, pictures} = destination;
  createPictureTemplate(pictures);
  if (description === '' && (!pictures || !pictures.length)) {
    return ('<div></div>');
  }
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${picturesCheck(destination)}
    </section>`
  );
}

export default class EventDestination {
  constructor({destination}) {
    this.destination = destination;
  }

  getTemplate() {
    return eventDestinationTemplate(this.destination);
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
