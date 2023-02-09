import ItemCard from "./ItemCard";

export default function ItemList({ items, noLink, keyToShow = null, needBg, needBorder }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {items.map(item => (
                <ItemCard key={item.id} id={item.id} noLink={noLink} image={item.image} needBg={needBg} needBorder={needBorder} >{item[keyToShow]}</ItemCard>
            ))}
        </div>
    );
};