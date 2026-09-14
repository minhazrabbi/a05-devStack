import type { Technology } from "../../types/technology";

type CartItemProps = {
  technology: Technology;
  onRemoveFromStack: (id: number) => void;
};

const CartItem = ({ technology, onRemoveFromStack }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
      <div className="flex items-center gap-3">
        <img
          src={technology.logo}
          alt={`${technology.name} logo`}
          className="h-9 w-9 object-contain"
        />

        <div>
          <h3 className="text-sm font-semibold text-slate-800">
            {technology.name}
          </h3>

          <p className="text-xs text-slate-500">{technology.category}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemoveFromStack(technology.id)}
        className="text-sm font-medium text-rose-500 hover:text-rose-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
