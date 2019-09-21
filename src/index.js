import React from 'react';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component';
import moment from 'moment';
import UIkit from 'uikit';

import './App.css';
import './index.css';
import 'uikit/dist/css/uikit.min.css';
import * as serviceWorker from './serviceWorker';

const App = loadable(() => import(/* webpackChunkName: "App" */'./App'));

import(/* webpackChunkName: "moment_id_locale" */ 'moment/locale/id')
    .then(() => {
        moment.locale('id');
    });

import(/* webpackChunkName: "UIKitIcon" */ 'uikit/dist/js/uikit-icons')
    .then((Icons) => {
        UIkit.use(Icons.default);
    });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
