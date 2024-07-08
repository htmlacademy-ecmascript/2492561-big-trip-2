import TripInfo from '../view/trip-info';
import TripEventsSort from '../view/trip-events-sort';
import TripEventsList from '../view/trip-events-list';
import TripEvent from '../view/trip-event';
import EventEdit from '../view/event-edit';
import EventOffers from '../view/event-offers';
import EventDestination from '../view/event-destination';
import { render } from '../render';

export default class BoardPresenter {
  tripControlsContainer = document.querySelector('.trip-main');
  tripEventsList = new TripEventsList();

  constructor({boardContainer, pointModel}) {
    this.boardContainer = boardContainer;
    this.pointModel = pointModel;
  }

  initMain() {
    this.eventPoints = [...this.pointModel.getPoint()];
    this.eventEdit = this.pointModel.getEdit();
    this.eventOffers = this.pointModel.getOffers();
    this.eventDestination = this.pointModel.getDestination();
    //Рендер трип инфо
    render(new TripInfo, this.tripControlsContainer, 'afterbegin');

    //Рендер нового ивента
    render(new TripEventsSort(), this.boardContainer);
    render(this.tripEventsList,this.boardContainer);
    render(new EventEdit({
      edit: this.eventEdit
    }), this.tripEventsList.getElement());
    const eventDetails = document.querySelector('.event__details');
    render(new EventOffers({
      offers: this.eventOffers
    }), eventDetails);
    render(new EventDestination({
      destination: this.eventDestination
    }), eventDetails);

    //Рендер уже созданных ивентов
    for (let i = 0; i < this.eventPoints.length; i++) {
      render(new TripEvent({
        point: this.eventPoints[i]
      }), this.tripEventsList.getElement());
    }
  }
}


