// components/Layout.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/globals.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
