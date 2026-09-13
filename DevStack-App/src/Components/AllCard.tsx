import { use } from "react";
import Card from "./Card";

export interface Technology {
    id: number;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

interface AllCardProps {
    dataPromise: Promise<Technology[]>;
    selectedTechnologies: Technology[];
    onAdd: (technology: Technology) => void;
}

const AllCard = ({
    dataPromise,
    selectedTechnologies,
    onAdd,
}: AllCardProps) => {
    const technologies = use(dataPromise);

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
                const isAdded = selectedTechnologies.some(
                    (item) => item.id === technology.id
                );

                return (
                    <Card
                        key={technology.id}
                        technology={technology}
                        onAdd={onAdd}
                        isAdded={isAdded}
                    />
                );
            })}
        </div>
    );
};

export default AllCard;