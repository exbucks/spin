import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';

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
