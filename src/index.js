import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

// redux
import Store from './redux/store';
import { Provider } from 'react-redux';
import { persistor } from '~/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import GlobalStyles from './components/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <GlobalStyles>
      <PersistGate loading={null} persistor={persistor}>
        <StrictMode>
          <App />
        </StrictMode>
      </PersistGate>
    </GlobalStyles>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
