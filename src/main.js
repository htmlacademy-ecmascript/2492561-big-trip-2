import TripControls from './view/trip-controls';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';


import PointsModel from './model/points-model';

const siteHeaderElement = document.querySelector('.page-header');
const tripControlsContainer = siteHeaderElement.querySelector('.trip-controls');
const tripEventsList = document.querySelector('.trip-events');
const pointModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: tripEventsList,
  pointModel
});

render(new TripControls(), tripControlsContainer, 'afterbegin');

boardPresenter.initMain();
