import type { Technology } from "./AllCard";

interface CardProps {
    technology: Technology;
    onAdd: (technology: Technology) => void;
    isAdded: boolean;
}

const Card = ({ technology, onAdd, isAdded }: CardProps) => {
    return (
        <div
            className={`rounded-2xl p-[2px] transition duration-300 hover:-translate-y-1 ${isAdded ? "brand-gradient" : "bg-transparent"
                }`}
        >
            <div className="flex h-full min-h-[390px] flex-col rounded-[14px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg">
                <div className="flex h-14 items-start justify-between gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2.5">
                        <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    {technology.badge && (
                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                            {technology.badge}
                        </span>
                    )}
                </div>

                <h3 className="mt-5 min-h-7 text-xl font-bold text-slate-900">
                    {technology.name}
                </h3>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                    {technology.description}
                </p>

                <div className="mt-auto">
                    <div className="flex min-h-8 items-center gap-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                {technology.category}
                            </span>

                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                {technology.difficulty}
                            </span>
                        </div>

                        <span className="ml-auto shrink-0 whitespace-nowrap text-sm font-semibold text-amber-500">
                            ★ {technology.rating}
                        </span>
                    </div>

                    <button
                        onClick={() => onAdd(technology)}
                        disabled={isAdded}
                        className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${isAdded
                            ? "cursor-not-allowed bg-slate-100 text-slate-400"
                            : "bg-slate-800 text-white hover:bg-slate-700"
                            }`}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;