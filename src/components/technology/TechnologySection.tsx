import { useEffect, useState } from "react";

import TechnologyCard from "./TechnologyCard";
import Cart from "../cart/Cart";

import type { Technology } from "../../types/technology";

type TechnologySectionProps = {
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
  onRemoveFromStack: (id: number) => void;
  onRemoveAll: () => void;
};

const TechnologySection = ({
  stack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        setError("Failed to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section id="technologies" className="px-[8%] py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore Technologies
        </h2>

        <p className="mt-2 text-slate-500">
          Choose the technologies you want to include in your development stack.
        </p>
      </div>

      {loading && (
        <p className="py-10 text-center text-slate-500">
          Loading technologies...
        </p>
      )}

      {error && <p className="py-10 text-center text-rose-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                stack={stack}
                onAddToStack={onAddToStack}
              />
            ))}
          </div>

          <Cart
            stack={stack}
            onRemoveFromStack={onRemoveFromStack}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default TechnologySection;
