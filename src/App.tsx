import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import TechnologySection from "./components/technology/TechnologySection";
import Footer from "./components/layout/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology
  const handleAddToStack = (technology: Technology) => {
    setStack((currentStack) => {
      const alreadyExists = currentStack.some(
        (item) => item.id === technology.id
      );

      // Prevent duplicate
      if (alreadyExists) {
        toast.warning(
          `${technology.name} is already in your stack.`
        );

        return currentStack;
      }

      toast.success(
        `${technology.name} added to your stack.`
      );

      return [...currentStack, technology];
    });
  };

  // Remove one technology
  const handleRemoveFromStack = (id: number) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  // Remove everything
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack."
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
        onRemoveAll={handleRemoveAll}
      />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;