import TripControls from './view/trip-controls';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';

const siteHeaderElement = document.querySelector('.page-header');
const tripControlsContainer = siteHeaderElement.querySelector('.trip-controls');
const boardPresenter = new BoardPresenter();

render(new TripControls(), tripControlsContainer, 'afterbegin');

boardPresenter.initMain();
