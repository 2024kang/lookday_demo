import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">FashionTravel</div>
            <input type="text" placeholder="Search..." className="searchbar" />
            <div className="nav-links">
                <a href="#">Services</a>
                <a href="#">Cart</a>
                <a href="#">Favorites</a>
                <a href="#">Sign Up</a>
                <a href="#">Login</a>
            </div>
        </header>
    );
}

export default Header;
