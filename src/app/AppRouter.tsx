import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "news",
          element: (
            <div className="flex flex-col items-center justify-center h-80 mb-10 p-20 rounded-xl bg-[#060607] w-fit mx-auto">
              <h1 className="text-4xl font-bold mb-4">В разработке</h1>
              <p className="text-xl">
                Мы работаем над этим разделом. Пожалуйста, зайдите позже!
              </p>
            </div>
          ),
        },
        {
          path: "categories",
          element: (
            <div className="flex flex-col items-center justify-center h-80 mb-10 p-20 rounded-xl bg-[#060607] w-fit mx-auto">
              <h1 className="text-4xl font-bold mb-4">В разработке</h1>
              <p className="text-xl">
                Мы работаем над этим разделом. Пожалуйста, зайдите позже!
              </p>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;
