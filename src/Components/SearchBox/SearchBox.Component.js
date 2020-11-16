import React from 'react';

import { SearchBoxComponent, SearchBoxContainerComponent } from './SearchBox.Styles';

const SearchBox = ({ searchChange }) => {
    return (
        <SearchBoxContainerComponent>
            <SearchBoxComponent 
                type="text"
                name="search"
                placeholder="Search Robots..."
                onChange={searchChange}
            />
        </SearchBoxContainerComponent>
    );
}

export default SearchBox;