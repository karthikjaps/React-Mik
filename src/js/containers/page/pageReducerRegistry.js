export class PageReducerRegistry {
  constructor() {
    this._reducers = {};
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
  }
}

const pageReducerRegistry = new PageReducerRegistry();
export default pageReducerRegistry;
