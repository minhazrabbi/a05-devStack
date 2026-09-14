import CartItem from "./CartItem";
import type { Technology } from "../../types/technology";

type CartProps = {
  stack: Technology[];
  onRemoveFromStack: (id: number) => void;
};

const Cart = ({ stack, onRemoveFromStack }: CartProps) => {
  return (
    <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

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

      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center">
          <p className="text-sm text-slate-500">Your stack is empty</p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          {stack.map((technology) => (
            <CartItem
              key={technology.id}
              technology={technology}
              onRemoveFromStack={onRemoveFromStack}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default Cart;
