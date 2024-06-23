import TripInfo from '../view/trip-info';
import TripEventsSort from '../view/trip-events-sort';
import TripEventsList from '../view/trip-events-list';
import EventListItem from '../view/trip-list-item';
import TripEvent from '../view/trip-event';
import EventEdit from '../view/event-edit';
import EventDetails from '../view/event-details';
import EventOffers from '../view/event-offers';
import EventDestination from '../view/event-destination';
import { render } from '../render';

export default class BoardPresenter {
  tripControlsContainer = document.querySelector('.trip-main');
  tripEventsContainer = document.querySelector('.trip-events');
  tripEventList = new TripEventsList();
  eventListItem = new EventListItem();
  eventEdit = new EventEdit();
  eventDetails = new EventDetails();


  initMain() {
    //Рендер трип инфо
    render(new TripInfo, this.tripControlsContainer, 'afterbegin');

    //Рендер нового ивента
    render(new TripEventsSort(), this.tripEventsContainer);
    render(this.tripEventList,this.tripEventsContainer);
    render (this.eventListItem, this.tripEventList.getElement());
    render(this.eventEdit, this.eventListItem.getElement());
    render(this.eventDetails, this.eventEdit.getElement());
    render(new EventOffers(), this.eventDetails.getElement());
    render(new EventDestination(), this.eventDetails.getElement());

    //Рендер уже созданных ивентов
    for (let i = 0; i < 3; i++) {
      render(new TripEvent(), this.tripEventList.getElement());
    }
  }
}

