import createMockEvent from '../mock/mock-points';
import { mockDestinations } from '../mock/mock-destinations';

const POINTS_COUNT = 3;

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, createMockEvent);
  edit = createMockEvent();

  getPoint() {
    return this.points;
  }

  getEdit(){
    return this.edit;
  }

  getDestination() {
    return mockDestinations.find((city) => city.id === this.edit.destination);
  }

  getOffers() {
    return this.edit.offers;
  }
}
