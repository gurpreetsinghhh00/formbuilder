import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import ViewForm from "./pages/ViewForm";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <CreateForm />,
      },
      {
        path: "viewform",
        element: <ViewForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
