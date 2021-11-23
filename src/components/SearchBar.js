import React from 'react'
import '../styles/components/searchbar.scss'
import TextField from './TextField';

const SearchBar = () => {
    return (
        <div className="searchbar" >
           <div>
               <TextField/>
           </div> 
           <div></div> 
        </div>
    )
}

export default SearchBar
