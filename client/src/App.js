import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./Router/Routes/Routes";

// import ReactGA from "react-ga";
import "react-toastify/dist/ReactToastify.css";
import GoogleTagManager from "./GoogleTagManager";

// ReactGA.initialize("");

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <GoogleTagManager gtmId="GTM-M7L3M3KQ" />
    </div>
  );
}

export default App;
