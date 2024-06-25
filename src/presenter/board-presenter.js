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
  tripEventsContainer = document.querySelector('.trip-events');
  tripEventList = new TripEventsList();


  initMain() {
    //Рендер трип инфо
    render(new TripInfo, this.tripControlsContainer, 'afterbegin');

    //Рендер нового ивента
    render(new TripEventsSort(), this.tripEventsContainer);
    render(this.tripEventList,this.tripEventsContainer);
    render(new EventEdit(), this.tripEventList.getElement());
    const eventDetails = document.querySelector('.event__details');
    render(new EventOffers(), eventDetails);
    render(new EventDestination(), eventDetails);

    //Рендер уже созданных ивентов
    for (let i = 0; i < 3; i++) {
      render(new TripEvent(), this.tripEventList.getElement());
    }
  }
}

