import search from '../../../assets/search.svg';
import check from '../../../assets/check.png';

import '../SearchFiltered/SearchFiltered.scss';

const SearchFiltered = () => {
    return(
        <>
        <div className='SearchFiltered__container'>
            
            <div className='search__container'>
            <img className='search__img' src={search} alt="" />
            <input className='search__input' type="search" name="search" id="search" placeholder='Rechercher par métier, date JJ/MM/AAAA ou candidat' />
            </div>
            
            <input className='search__date' type="date" name="date" id="" />

            <button className='search__check' type="submit"><img className='search__checkImg' src={check} alt="" /> Sélectionner</button>

        </div>
        </>
    )
}

export default SearchFiltered;