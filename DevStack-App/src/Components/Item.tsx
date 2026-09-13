import type { Technology } from "./AllCard";

interface ItemProps {
    technology: Technology;
    onRemove: (id: number) => void;
}

const Item = ({ technology, onRemove }: ItemProps) => {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <img
                src={technology.icon}
                alt={technology.name}
                className="h-9 w-9 object-contain"
            />

            <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-slate-900">
                    {technology.name}
                </h4>

                <p className="text-xs text-slate-500">
                    {technology.category}
                </p>
            </div>

            <button
                onClick={() => onRemove(technology.id)}
                className="btn btn-ghost btn-sm btn-circle text-indigo-500 hover:bg-indigo-50"
            >
                ✕
            </button>
        </div>
    );
};

export default Item;
