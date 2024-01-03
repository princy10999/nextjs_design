import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar/Navbar";
// import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="bodyContent">
      <Navbar1 />
      <div className="m-70">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
