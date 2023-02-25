import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import App from './App';

import '@/style/global.css';
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <Toaster />
    <Tooltip id="tooltip" className="!bg-primary" />
  </React.StrictMode>
);
