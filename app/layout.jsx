import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import NavigateProgress from "@/app/components/NavigateProgress";

export const metadata = {
  title: "Next Blog Project Module-12",
  description: "Learn with OSTAD team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
        <div className=" bg-gradient-to-br from-green-50 via-orange-50 to-sky-100 w-full min-h-screen">
          <Header />
          <div className=" container mx-auto py-20"> {children}</div>
          <NavigateProgress />
          <Footer />
        </div>
      </body>
    </html>
  );
}
