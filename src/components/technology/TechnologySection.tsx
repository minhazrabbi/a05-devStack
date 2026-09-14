import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      const response = await fetch("/data/technologies.json");

      if (!response.ok) {
        throw new Error("Failed to fetch technologies");
      }

      const data: Technology[] = await response.json();

      setTechnologies(data);
    };

    loadTechnologies();
  }, []);

  return (
    <section className="px-[8%] py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Build Your Technology Stack
        </h2>

        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Explore technologies and choose the tools that fit your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
