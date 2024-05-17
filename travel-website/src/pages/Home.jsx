import './Home.css';
import ProductRanking from '../components/ProductRanking'; // Import the new component

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to FashionTravel</h1>
                <p>Explore the world with style.</p>
            </section>
            <ProductRanking /> {/* Add the ProductRanking component */}
        </div>
    );
}

export default Home;
