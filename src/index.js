import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import Callback from './components/Callback';
import reportWebVitals from './reportWebVitals'
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import { HashRouter } from "react-router-dom"

const Root = () => {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
        <Route path="/" component={Display}/>
        <Route path="/upload" component={Upload} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
reportWebVitals();
