import AbstractView from '../framework/view/abstract-view';

function createFilterItemTemplate(filter, currentFilterType) {
  const { type, count } = filter;

  return (
    `
      <div class="trip-filters__filter">
        <input
          id="filter-${type}"
          class="trip-filters__filter-input  visually-hidden"
          type="radio"
          name="trip-filter"
          value="${type}"
          ${type === currentFilterType ? 'checked' : ''}
          ${count === 0 && 'disabled'}
        />
        <label
          class="trip-filters__filter-label"
          for="filter-${type}"
        >
          ${filter.type}
        </label>
      </div>
    `
  );
}

function createTripFilterTemplate(filters, currentFilterType) {
  const createFilterList = filters.map((filter) => createFilterItemTemplate(filter, currentFilterType)).join('');
  return (
    `
      <form class="trip-filters" action="#" method="get">
        ${createFilterList}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    `
  );
}

class TripFilterView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor(filters, currentFilterType, onFilterTypeChange) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createTripFilterTemplate(this.#filters, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}

export default TripFilterView;
