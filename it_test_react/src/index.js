import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'mobx-react'
import TodoStore from './Component/store/TodoStore'

const root = (
    <Provider TodoStore = {TodoStore}>
        <App />
    </Provider>
)



ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
