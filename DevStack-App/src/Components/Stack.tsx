import Item from "./Item";
import type { Technology } from "./AllCard";

interface StackProps {
    selectedTechnologies: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

const Stack = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: StackProps) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div>
                <h3 className="text-xl font-bold text-slate-900">
                    Your Stack
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    {selectedTechnologies.length === 0
                        ? "No technologies selected yet."
                        : `${selectedTechnologies.length} technologies selected`}
                </p>
            </div>

            {selectedTechnologies.length === 0 ? (
                <div className="mt-5 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-sm text-slate-400">
                    Your stack is empty.
                </div>
            ) : (
                <div className="mt-5 space-y-3">
                    {selectedTechnologies.map((technology) => (
                        <Item
                            key={technology.id}
                            technology={technology}
                            onRemove={onRemove}
                        />
                    ))}

                    <button
                        onClick={onRemoveAll}
                        className="brand-gradient w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Stack;