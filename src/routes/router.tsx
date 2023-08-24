import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Contacts from '../components/Contacts';
import Charts from '../components/Charts';
import AddNewContacts from '../components/AddNewContacts';
import EditContact from '../components/EditContact';
import MapView from '../components/MapView';

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
        path: '/contacts/:id',
        element: <EditContact />
      },
      {
        path: '/charts',
        element: <Charts />
      },
      {
        path: '/maps',
        element: <MapView />
      }
    ]
  },
]);

export default routes;