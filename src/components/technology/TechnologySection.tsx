import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import Cart from "../cart/Cart";

import type { Technology } from "../../types/technology";

type TechnologySectionProps = {
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
  onRemoveFromStack: (id: number) => void;
};

const TechnologySection = ({
  stack,
  onAddToStack,
  onRemoveFromStack,
}: TechnologySectionProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section className="px-[8%] py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore the Technologies
        </h2>

        <p className="mt-2 text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_320px]">
        {/* Technology Area */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>

        <Cart stack={stack} onRemoveFromStack={onRemoveFromStack} />
      </div>
    </section>
  );
};

export default TechnologySection;
