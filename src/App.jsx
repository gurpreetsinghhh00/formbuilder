import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateForm from "./pages/CreateForm";
import ViewForm from "./pages/ViewForm";
import AppLayout from "./components/AppLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
