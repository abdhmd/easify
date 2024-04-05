"use client";

import "./globals.css";
import { appWithTranslation } from "next-i18next";
import { ContextProvider } from "@/context/DataContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>easify</title>
        <title>easify</title>
        <meta charSet="UTF-8"/>
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
