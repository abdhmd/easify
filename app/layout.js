"use client";

import "./globals.css";
import { appWithTranslation } from "next-i18next";
import { ContextProvider } from "@/context/DataContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>easify</title>
        <meta name="description" content="service website " />
      </head>
      <body
        suppressHydrationWarning={true}
        className="dark:text-white
        bg-gradient-to-br from-pink-50 via-red-50 bg-pink-50
        dark:bg-gradient-to-tr dark:from-slate-800 dark:via-zink-800 dark:bg-gray-800"
      >
        <ContextProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
