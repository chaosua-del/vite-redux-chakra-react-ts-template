import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import { routes } from './shared/constants/routes';
import { theme } from './shared/theme';
import { ErrorPage, Main } from './pages';

import './shared/theme/styles.css';

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Main />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
