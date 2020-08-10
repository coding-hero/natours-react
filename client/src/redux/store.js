import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

export default createStore(reducers, composedEnhancer);
