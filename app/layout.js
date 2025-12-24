import "./globals.css";
import NavBar from "./_component/Home/Navbar";
import Footer from "./_component/Home/Footer";

export const metadata = {
  title: "My Landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
