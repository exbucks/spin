import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
