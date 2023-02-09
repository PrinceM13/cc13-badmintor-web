import ProductCard from './ProductCard';

export default function ItemList({ items, keyToShow = null }) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {items.map(item => (
                <ProductCard key={item.id} id={item.id} image={item.image} >{item[keyToShow]}</ProductCard>
            ))}
        </div>
    );
};