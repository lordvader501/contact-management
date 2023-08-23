import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Contacts from '../components/Contacts';
import ChartsAndMaps from '../components/ChartsAndMaps';
import AddNewContacts from '../components/AddNewContacts';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Contacts />,
        children: [
          {
            path: 'contacts',
            element: <Contacts />,
          },
        ]
      },
      {
        path: '/contacts/new',
        element: <AddNewContacts />
      },
      {
        path: '/charts-and-maps',
        element: <ChartsAndMaps />
      }
    ]
  },
]);

export default routes;