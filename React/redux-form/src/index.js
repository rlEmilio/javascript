import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import store from './store'; // Importa el store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Envuelve la aplicación en el Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Si quieres comenzar a medir el rendimiento en tu app, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviarlos a un endpoint de análisis.
reportWebVitals();
