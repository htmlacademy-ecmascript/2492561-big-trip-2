import { getRandomInt,getRandomArrayElement } from '../utils.js';
import {getRandonDestaintion} from './mock-destinations.js';
import getOffersByType from './mock-offers.js';
import { TYPE_OF_EVENTS } from '../const.js';

const MAX_PRICE = 100;

export default function createMockEvent() {
  const mockEvent = {
    id: '',
    basePrice: getRandomInt(MAX_PRICE),
    dateFrom: '',
    dateTo: '',
    destination: getRandonDestaintion().id,
    isFavorite: Math.random() > 0.5,
    offers: [],
    type: getRandomArrayElement(TYPE_OF_EVENTS).toLowerCase()
  };
  mockEvent.offers = getOffersByType(mockEvent.type);
  return mockEvent;
}


