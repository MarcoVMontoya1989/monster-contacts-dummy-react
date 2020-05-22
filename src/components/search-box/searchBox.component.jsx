import React from 'react';

import './searchBox.css';

const SearchBoxComponent = (props) => {
    return (
        <div>
            <input className='search'
                   onChange={ props.onChangeHandler }
                   placeholder='Search Monster'
                   type='search'
            />
        </div>
    );
};

export default SearchBoxComponent;