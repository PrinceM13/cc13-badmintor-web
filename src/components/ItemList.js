import ItemCard from "./ItemCard";

export default function ItemList({ items, needBg }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {items.map(item => (
                <ItemCard key={item.id} image={item.image} needBg={needBg}>{item.category}</ItemCard>
            ))}
        </div>
    );
};