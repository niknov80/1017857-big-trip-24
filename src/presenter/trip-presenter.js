import TripFilterView from '../view/trip-filter-view';
import TripInfoView from '../view/trip-info-view/trip-info-view';
import TripInfoMainView from '../view/trip-info-view/trip-info-main-view';
import TripInfoCostView from '../view/trip-info-view/trip-info-cost';
import { render, RenderPosition } from '../render.js';

export default class TripPresenter {
  tripInfoViewComponent = new TripInfoView();

  constructor(tripInfoContainer, filterContainer) {
    this.tripInfoContainer = tripInfoContainer;
    this.filterContainer = filterContainer;
  }

  init() {
    render(this.tripInfoViewComponent, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new TripInfoMainView(), this.tripInfoViewComponent.getElement());
    render(new TripInfoCostView(), this.tripInfoViewComponent.getElement());
    render(new TripFilterView(), this.filterContainer);
  }
}