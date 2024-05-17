import './ProductRanking.css';

const productsList = [
    [
        { id: 1, name: 'Product A1', rank: 1 },
        { id: 2, name: 'Product B1', rank: 2 },
        { id: 3, name: 'Product C1', rank: 3 },
        // Add more products as needed
    ],
    [
        { id: 4, name: 'Product A2', rank: 1 },
        { id: 5, name: 'Product B2', rank: 2 },
        { id: 6, name: 'Product C2', rank: 3 },
        // Add more products as needed
    ],
    [
        { id: 7, name: 'Product A3', rank: 1 },
        { id: 8, name: 'Product B3', rank: 2 },
        { id: 9, name: 'Product C3', rank: 3 },
        // Add more products as needed
    ],
    // Add more product lists as needed
];

const ProductRanking = () => {
    return (
        <div className="product-rankings">
            {productsList.map((products, index) => (
                <div key={index} className="product-ranking">
                    <h2>Top Ranked Products {index + 1}</h2>
                    <ul>
                        {products.map(product => (
                            <li key={product.id} className="product-item">
                                <span className="rank">{product.rank}</span>
                                <span className="name">{product.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ProductRanking;
