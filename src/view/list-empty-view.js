import AbstractView from '../framework/view/abstract-view';
import { FilterType } from '../constants';

const NoPointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
  'ERROR': 'Failed to load latest route information'
};

function createListEmptyTemplate(filterType) {
  const noPontTextValue = NoPointsTextType[filterType];

  return (
    `
      <p class="trip-events__msg">${noPontTextValue}</p>
    `
  );
}

class ListEmptyView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createListEmptyTemplate(this.#filterType);
  }
}

export default ListEmptyView;
