import React from 'react'
import PropTypes from 'prop-types';

 const Search = (props) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column',marginBottom:'40px'}}>
            <h2>Search Blog By Subject:</h2>
            <form action="" className="ui form">
            <div className="field">
              <input
                type="text"
                placeholder="Search by subject..."
                onChange={props.handleChange}
                value={props.searchTerm}
              />
            </div>
          </form>
        </div>
    )
}

export default Search

Search.propTypes = {
    searchTerm:PropTypes.string,
    handleChange:PropTypes.func
}
