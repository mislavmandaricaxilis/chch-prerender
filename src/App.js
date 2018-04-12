import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';

import 'semantic-ui-css/semantic.min.css';
import 'react-placeholder/lib/reactPlaceholder.css';

const App = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

export default App;