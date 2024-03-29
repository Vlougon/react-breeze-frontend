import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { FormProvider } from './context/FormContext.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </AuthProvider>
  </Router>
);
