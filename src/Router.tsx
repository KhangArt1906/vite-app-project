import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './app/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
