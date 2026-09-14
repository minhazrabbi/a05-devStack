import type { Technology } from "../../types/technology";

type CartItemProps = {
  technology: Technology;
  onRemoveFromStack: (id: number) => void;
};

const CartItem = ({
  technology,
  onRemoveFromStack,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
      
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={technology.logo}
          alt={`${technology.name} logo`}
          className="h-9 w-9 shrink-0 object-contain"
        />

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-800">
            {technology.name}
          </h3>

          <p className="text-xs text-slate-500">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemoveFromStack(technology.id)}
        aria-label={`Remove ${technology.name}`}
        className="ml-3 shrink-0 text-lg font-medium text-slate-400 transition-colors hover:text-rose-500"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;