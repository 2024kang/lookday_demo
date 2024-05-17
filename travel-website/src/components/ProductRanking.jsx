import './ProductRanking.css';

const products = [
    { id: 1, name: 'Product A', rank: 1 },
    { id: 2, name: 'Product B', rank: 2 },
    { id: 3, name: 'Product C', rank: 3 },
    // Add more products as needed
];

const ProductRanking = () => {
    return (
        <div className="product-ranking">
            <h2>Top Ranked Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <span className="rank">{product.rank}</span>
                        <span className="name">{product.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductRanking;
