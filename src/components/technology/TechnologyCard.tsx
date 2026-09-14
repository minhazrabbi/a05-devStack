import type { Technology } from "../../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
};

const TechnologyCard = ({ technology, onAddToStack }: TechnologyCardProps) => {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={technology.logo}
          alt={`${technology.name} logo`}
          className="h-12 w-12 object-contain"
        />
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.skillLevel}
        </span>
        <span className="ml-auto text-sm font-medium text-slate-700">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        className="mt-6 w-full rounded-xl bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-pink-700"
      >
        Add to Stack
      </button>
    </article>
  );
};

export default TechnologyCard;
