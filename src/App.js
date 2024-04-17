import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;