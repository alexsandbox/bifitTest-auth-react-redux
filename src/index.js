import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index';

const store = configureStore('bifit', reducers);

ReactDOM.render(<Root store={store} />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension
registerServiceWorker();
