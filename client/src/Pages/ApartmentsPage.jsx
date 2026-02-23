import React, { useState, useEffect } from "react";
import Apartments from "../component/Apartments.jsx";

const ApartmentsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return <Apartments loading={loading} showBackButton={true} />;
};

export default ApartmentsPage;
