import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);
    return (
        <div className="min-h-screen">
            <Header />
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default App;
