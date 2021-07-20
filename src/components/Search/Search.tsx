import React from 'react'
import SearchIcon from '../../assets/Svg/search.svg';

const Search: React.FC = () => {
    return <div className="component-search text-sm">
        <img src={SearchIcon} alt="search-icon" className="component-search__icon" />
        <input placeholder="Search" className="component-search__input text-white text-sm" />
    </div>
}

export default Search