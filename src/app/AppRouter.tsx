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
            <div className="mx-auto mb-10 flex h-80 w-fit flex-col items-center justify-center rounded-xl bg-[#060607] p-20">
              <h1 className="mb-4 text-4xl font-bold">В разработке</h1>
              <p className="text-xl">
                Мы работаем над этим разделом. Пожалуйста, зайдите позже!
              </p>
            </div>
          ),
        },
        {
          path: "categories",
          element: (
            <div className="mx-auto mb-10 flex h-80 w-fit flex-col items-center justify-center rounded-xl bg-[#060607] p-20">
              <h1 className="mb-4 text-4xl font-bold">В разработке</h1>
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
