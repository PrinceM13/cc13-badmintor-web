import ItemCard from "./ItemCard";

export default function ItemList({ items, keyToShow = null, needBg, needBorder }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {items.map(item => (
                <ItemCard key={item.id} id={item.id} image={item.image} needBg={needBg} needBorder={needBorder} >{item[keyToShow]}</ItemCard>
            ))}
        </div>
    );
};