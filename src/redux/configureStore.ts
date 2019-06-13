// Redux Store Configuration
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import sagaMiddleware from './sagaMiddleware';

const configureStore = () => {
 
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(sagaMiddleware);
  return createStore(rootReducer, composeEnhancers(middleware));
};

export default configureStore;
