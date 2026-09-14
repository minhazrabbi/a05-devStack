import CartItem from "./CartItem";
import type { Technology } from "../../types/technology";

type CartProps = {
  stack: Technology[];
  onRemoveFromStack: (id: number) => void;
  onRemoveAll: () => void;
};

const Cart = ({
  stack,
  onRemoveFromStack,
  onRemoveAll,
}: CartProps) => {
  return (
    <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5">
      
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {stack.length}
          </span>
        </div>

        <p className="mt-1 text-sm text-slate-500">
          {stack.length === 0
            ? "No technology selected yet"
            : `${stack.length} ${
                stack.length === 1 ? "technology" : "technologies"
              } selected`}
        </p>
      </div>

      {/* Stack Items / Empty State */}
      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center">
          <p className="text-sm text-slate-500">
            Your stack is empty
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-col gap-3">
            {stack.map((technology) => (
              <CartItem
                key={technology.id}
                technology={technology}
                onRemoveFromStack={onRemoveFromStack}
              />
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-medium text-rose-600 transition hover:bg-rose-100"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Cart;