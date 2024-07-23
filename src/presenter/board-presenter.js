import TripInfo from '../view/trip-info';
import TripEventsSort from '../view/trip-events-sort';
import TripEventsList from '../view/trip-events-list';
import TripEvent from '../view/trip-event';
import EventEdit from '../view/event-edit';
// import EventNewPoint from '../view/event-new-point';
import EventOffers from '../view/event-offers';
import EventDestination from '../view/event-destination';
import { render, replace } from '../framework/render';

export default class BoardPresenter {
  tripControlsContainer = document.querySelector('.trip-main');
  tripEventsList = new TripEventsList();

  constructor({boardContainer, pointModel}) {
    this.boardContainer = boardContainer;
    this.pointModel = pointModel;
  }

  initMain() {
    this.eventPoints = [...this.pointModel.getPoint()];
    //Рендер трип инфо
    render(new TripInfo(), this.tripControlsContainer, 'afterbegin');

    //Рендер нового ивента
    render(new TripEventsSort(), this.boardContainer);
    render(this.tripEventsList,this.boardContainer);

    //Рендер уже созданных ивентов
    for (let i = 0; i < this.eventPoints.length; i++) {
      const newPoint = new TripEvent({point: this.eventPoints[i]});
      const pointEdit = new EventEdit({edit: this.eventPoints[i]});
      const form = pointEdit.element.querySelector('.event--edit');
      const eventDetails = pointEdit.element.querySelector('.event__details');
      render(new EventOffers({
        offers: this.pointModel.getOffers(this.eventPoints[i])
      }), eventDetails);
      render(new EventDestination({
        destination: this.pointModel.getDestination(this.eventPoints[i])
      }), eventDetails);
      const handleEsc = (e) => {
        if (e.code === 'Escape' && this.tripEventsList.element.contains(pointEdit.element)) {
          replace(newPoint, pointEdit);
        }
      };

      newPoint.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
        replace(pointEdit, newPoint);
        window.addEventListener('keydown', handleEsc,{once: true});
      });
      pointEdit.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
        replace(newPoint, pointEdit);
        window.removeEventListener('keydown', handleEsc);
      });
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        replace(newPoint, pointEdit);
        window.removeEventListener('keydown', handleEsc);
      });
      render(newPoint, this.tripEventsList.element);
    }
  }
}


