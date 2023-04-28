import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "pages/home/Home";
import News from "pages/news/News";
import Background from "pages/background/Background";
import Enrollment from "pages/enrollment/Enrollment";
import Sponsorship from "pages/sponsorship/Sponsorship";
import Shop from "pages/shop/Shop";
import Maintenance from "pages/maintenance/Maintenance";
import NotFound from "pages/notfound/NotFound";

function Layout() {
    const isMaintenanceMode = true; // set this to false when maintenance is complete
  
    if (isMaintenanceMode) {
      return (
        <div>
          <div className="container">
            <Maintenance />
          </div>
        </div>
      );
    }
  
    return (
      <div>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/background" element={<Background />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }

export default Layout;
