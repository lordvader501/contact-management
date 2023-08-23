import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Contacts from '../components/Contacts';
import ChartsAndMaps from '../components/ChartsAndMaps';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contacts />
      },
      {
        path: '/charts-and-maps',
        element: <ChartsAndMaps />
      }
    ]
  },
]);

export default routes;