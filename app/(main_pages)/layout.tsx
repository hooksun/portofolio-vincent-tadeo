import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import PixelartHeader from "../_components/PixelartHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden perspective-1 z-0 scroll-smooth">
      <PixelartHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
