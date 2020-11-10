import React from 'react';

import { SearchBoxComponent, SearchBoxContainerComponent } from './SearchBox.Styles';

const SearchBox = () => {
    return (
        <SearchBoxContainerComponent>
            <SearchBoxComponent 
                type="searc" 
                placeholder="search robots" 
            />
        </SearchBoxContainerComponent>
    );
}

export default SearchBox;