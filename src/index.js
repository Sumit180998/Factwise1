import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals';
import UserCard from './Card/UserCard';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import DeleteDialog from './Delete/DeleteDialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
<App />
    </Provider>
    {/* <DeleteDialog/> */}
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
