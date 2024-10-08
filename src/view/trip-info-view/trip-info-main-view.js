import AbstractView from '../../framework/view/abstract-view';

function createTripInfoMain() {

  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
    </div>
  `;
}

class TripInfoMainView extends AbstractView {
  get template() {
    return createTripInfoMain();
  }
}

export default TripInfoMainView;
