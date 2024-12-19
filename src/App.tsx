import { Route, Routes, Navigate } from "react-router";
import Nav from "./components/nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Catalogue from "./components/Catalogue";
import ProductPage from "./components/NailsPage";
import { useContext, useEffect, useState } from "react";
import SignUP from "./components/Signup";
import AddItem from "./components/Additem";
import { ToastContainer } from "react-toastify";
import DashBoard from "./components/Dashboard";
import Footer from "./components/Footer";
import EditItem from "./components/EditCatalogue";
import About from "./components/About";
import Contact from "./components/Contact";
import { AuthContext } from "./components/context/AuthContext";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(selectedPage);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedPage]);
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer />
      <Nav isTopOfPage={isTopOfPage} />

      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue/:category" element={<Catalogue />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* Protected  Routes */}{" "}
        <Route
          path="/sign-up"
          element={user ? <SignUP /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={user ? <DashBoard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-catalogue"
          element={user ? <AddItem /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-catalogue"
          element={user ? <EditItem /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer user={user} />
    </div>
  );
};

export default App;
