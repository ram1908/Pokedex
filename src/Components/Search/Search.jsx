// CSS imports

import useDebounce from '../hooks/useDebounce';
import './Search.css'

function Search ({updateSearchTerm}) {
    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        < input 
        id='search-pokemon'
        type="text" placeholder='Pokemon search?' 
        onChange={debounceUpdateSearch}
        />
    )
}

export default Search;
