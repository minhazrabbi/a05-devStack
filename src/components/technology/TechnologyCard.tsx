import type { Technology } from "../../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  stack,
  onAddToStack,
}: TechnologyCardProps) => {
  const isAdded = stack.some(
    (item) => item.id === technology.id
  );

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <img
          src={technology.logo}
          alt={`${technology.name} logo`}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {technology.category}
        </span>

        <span className="text-xs text-slate-500">
          {technology.skillLevel}
        </span>

        <span className="ml-auto text-xs font-medium text-slate-700">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;