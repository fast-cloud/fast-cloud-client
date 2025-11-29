import Home from '@/pages/home/Home';
import GenerateContainer from '@/pages/main-service/docker-container/generate-container/generate-container';
import GenerateInstance from '@/pages/main-service/mini-pc/generate-instance/generate-instance';
import { TestPage } from '@/pages/Test/TestPage';
import Layout from '@/routes/layout';
import { ROUTES } from '@/routes/paths';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout hasButton={true} />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.GENERATE_INSTANCE,
        element: <GenerateInstance />,
      },
      {
        path: ROUTES.GENERATE_CONTAINER,
        element: <GenerateContainer />,
      },
      {
        path: ROUTES.TEST,
        element: <TestPage />,
      },
    ],
  },
]);
