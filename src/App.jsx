import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ReferalForm from "./pages/referal-form";
import Home from "./pages/home";
import RootLayout from "./components/layout/layout";
import ReferalModalProvider from "./contexts/referal-modal-context";
function App() {
  return (
    <div className="font-poppins bg-[url('https://play.tailwindcss.com/img/beams.jpg')] bg-cover bg-center">
      <ReferalModalProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <RootLayout>
                  <Outlet />
                </RootLayout>
              }
            >
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReferalModalProvider>
    </div>
  );
}

export default App;
