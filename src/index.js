import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store'

import {Provider} from 'react-redux';


// store.subscribe( () => {
//   console.log('Store Updated !', store.getState() );

// });

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

serviceWorker.register();
