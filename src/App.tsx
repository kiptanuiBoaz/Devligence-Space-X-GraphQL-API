import { lazy, Suspense } from "react";
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { Spinner } from "./components";
import { Route, Routes, Navigate } from "react-router-dom";
import RequireAuth from "./pages/RequireAuth";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/themeSlice";
import { Layout } from "./Layout";
const LauchesTable = lazy(() => import("./pages/LauchesTable"));
const Login = lazy(() => import("./pages/Login"));
const EditForm = lazy(() => import("./pages/EditForm"));

const App = () => {
  const theme = useSelector(selectTheme);


  return (
    <main className={`${theme}`}>
      <ScrollToTop style={{ backgroundColor: "#097ea5", zIndex: 7 }} smooth color="#eeeee4" />

      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* everything between navbar and footer */}
          <Route path="/" element={<Layout />}>
            {/* access only to authoenticated users */}
            <Route element={<RequireAuth />} >
              <Route index element={<LauchesTable />} />
              <Route path="/edit" element={<EditForm />} />
            </Route>

          </Route>

          {/* outside navbar and footer */}
          <Route path="login" element={<Login />} />
          {/* cath all lost directories and redirect to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default App;



