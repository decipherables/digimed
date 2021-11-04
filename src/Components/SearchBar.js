import React from 'react'

export default function SearchBar() {
    return (
        <form className={'searchBar'}>
            <button><i className={'fas fa-search'}/></button>
            <input type={'text/number'} placeholder={'Search Patients'}/>
        </form>
    )
}
