import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import './assets/css/style.css';
// import './assets/css/responsive.css';
import App from './containers/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <App/>
  // </Provider>
);
