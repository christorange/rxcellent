import './searchBar.css';
import logo from '../assets/logo.png';

const SearchBar = () => {
    return (
        <div className="search-bar-logo">
            <div>
                <img src={logo}></img>
            </div>

            <div className="search-bar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Search for medications and more"></input>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
