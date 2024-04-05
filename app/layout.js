"use client";

import "./globals.css";
import { appWithTranslation } from "next-i18next";
import { ContextProvider } from "@/context/DataContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html>
      <head>
        <title>easify</title>
=======
    <html lang="en">
      <head>
        <title>easify</title>
        <meta charSet="UTF-8"/>
>>>>>>> e07b5c6 (easify v 1.0.4)
        <meta name="description" content="service website " />
      </head>
      <body
        suppressHydrationWarning={true}
        className="theme-light theme-dark"
      >
        <ContextProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
        </ContextProvider>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
