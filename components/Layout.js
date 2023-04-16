import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
   <div className="container">
      <div className="loader close" id="loader"></div>
      <NavBar />
      <main>
      {children}
       </main>
      <Footer />
      </div>
  );
}
