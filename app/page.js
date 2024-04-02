"use client";

import { Hero, Services, Contact, About } from "./components";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

export default function Home() {
  const { content } = useContext(DataContext);

  return (
    <main className="container">
      <Hero data={content} />
      <Services data={content} />
      <Contact data={content} />
      <About data={content} />
    </main>
  );
}
