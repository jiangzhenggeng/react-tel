/**
 * Created by jiangzg on 2017/5/10.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Route,BrowserRouter } from 'react-router-dom';
import App from './app';
let div = document.createElement('div');
div.setAttribute('id','app');
document.getElementsByTagName('body')[0].appendChild(div);

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App}/>
    </BrowserRouter>
    , document.getElementById('app')
);