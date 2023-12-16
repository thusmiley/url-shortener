import NavBar from "@/components/NavBar";
import "./globals.css";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "URL Shortener",
  description: "Made by Thu Smiley @Naughty Cat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/images/favicon.svg" />
        <meta property="og:image" content="/images/desktop-preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NavBar />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
