import React, { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { Icon, SearchInput } from './SearchElements'

function Search({ placeholder, searchTerm, setseacrhTerm, searchHandler }) {

    return (
        <div style={{ marginLeft: '5rem', marginTop: 45 }}>
            <SearchInput placeholder={placeholder} value={searchTerm} onChange={searchHandler}></SearchInput>
            <Icon>
                <MdExpandMore />
            </Icon>
        </div>
    )
}

export default Search
