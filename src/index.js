import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = document.getElementById('root');
if (root.hasChildNodes()) {
    ReactDOM.hydrate(<App />, root);
} else {
    ReactDOM.render(<App />, root);
}
