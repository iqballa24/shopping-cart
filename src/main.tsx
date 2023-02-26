import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import store, { persistor } from '@/store';
import { Loader } from '@/component/UI';
import App from './App';

import '@/style/global.css';
import 'react-tooltip/dist/react-tooltip.css';
import 'react-loading-skeleton/dist/skeleton.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
        <Toaster />
        <Tooltip id="tooltip" className="!bg-primary" />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
