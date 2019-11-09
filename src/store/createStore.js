import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          composeEnhancers(applyMiddleware(...middlewares))
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
