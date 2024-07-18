import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AxiosInterceptor } from './interceptors';

const container = document.getElementById('root');
const root = createRoot(container!);

/* 
  Al importarlo aquí, garantizas que todas las peticiones que se hagan desde cualquier 
  parte de la aplicación estén interceptadas. 
*/
AxiosInterceptor();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);