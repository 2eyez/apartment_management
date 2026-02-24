import Navbar from "./component/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./component/About.jsx"; 
import ApartmentsPage from "./Pages/ApartmentsPage.jsx";
import ApartmentDetails from "./component/ApartmentDetails.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import PaymentPage from "./Pages/PaymentPage.jsx";
import Register from "./Pages/Register.jsx";
import AddProperty from "./Pages/AddProperty.jsx";
import Footer from "./component/Footer.jsx";
import OurPackages from "./Pages/OurPackages";
import { packagesData } from "./data/packages";
import BackButton from "./component/BackButton"; 
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const isOwnerPath = pathname.includes("/owner");

  return (
    <div className="flex flex-col min-h-screen">

      {/* Back Button (Appears on all pages except Home automatically) */}
      <BackButton />

      {!isOwnerPath && <Navbar />}

      <div className="flex-grow min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/apartments/:id" element={<ApartmentDetails />} />
          <Route path="/locations/:location" element={<LocationPage />} />
          <Route path="/payment/:apartmentId" element={<PaymentPage />} /> 

          {/* New Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/add-property" element={<AddProperty />} />

          {/* Our Packages Route */}
          <Route
            path="/our-packages"
            element={<OurPackages packages={packagesData} />}
          />
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;