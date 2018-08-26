import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
    <HashRouter history={history}>
        <App />
    </HashRouter>
    ,document.getElementById('root'))
