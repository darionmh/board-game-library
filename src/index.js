import React from 'react';
import {render} from 'react-dom';
import './styles/index.scss';
import App from './components/app/App';
import reducers from "./reducers/index"
import {createStore} from "redux"
import {Provider} from "react-redux"

const store = createStore(reducers)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);