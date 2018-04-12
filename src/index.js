import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { store } from './store';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById('root');
if (root.hasChildNodes()) {
    ReactDOM.hydrate(<App />, root);
} else {
    ReactDOM.render(<App />, root);
}

window.snapSaveState = () => ({
    "__PRELOADED_STATE__": store,
});
