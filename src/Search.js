import React from 'react'

const Search = (props) => {
        return (
            <div className="ui massive icon input">
                    <i className="inverted circular search link icon"></i>
                <input onChange={props.handleSearchChange} name="searchTerm" value={props.searchTerm}  placeholder="Search..."/>

            </div>
        )
    };


export default Search