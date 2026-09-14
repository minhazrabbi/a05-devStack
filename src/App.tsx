import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import TechnologySection from "./components/technology/TechnologySection";
import Footer from "./components/layout/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setStack((currentStack) => {
      const alreadyExist = currentStack.some(
        (item) => item.id === technology.id,
      );
      if (alreadyExist) {
        return currentStack;
      }
      return [...currentStack, technology];
    });
  };
  const handleRemoveFromStack = (id: number) => {
    setStack((currentStack) =>
      currentStack.filter((technology) => technology.id !== id),
    );
  };

  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection
        stack={stack}
        onAddToStack={handleAddToStack}
        onRemoveFromStack={handleRemoveFromStack}
      />
      <Footer />
    </>
  );
}

export default App;
