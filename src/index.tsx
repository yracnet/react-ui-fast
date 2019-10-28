import React from 'react';
import ReactDOM from 'react-dom';

import Showcase from './app/Showcase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Showcase />, document.getElementById('root'));

serviceWorker.unregister();
