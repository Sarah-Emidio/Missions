import '../Cards/Cards.scss';
import Candidat from '../../../assets/Candidat.png';

const Cards = () => {
    return (
        <div className="card">
            <div className="card__head">
                <div className='card__head__metierContent'>

                    <p className='card__head__metier'>Métiers</p>
                    <span className='card__head__price'>00,00€</span>

                </div>


                <div className='card__head__dateContent'>

                    <span className='card__head__aligneBadge'>

                        <p className='card__head__badge'>Badge</p>
                        <p className='card__head__date'> Date</p>
                    </span>

                    <p className='card__head__hour'>horaire</p>
                </div>
            </div>

            <div className="card__body">
                <img className="card__body__img" src={Candidat} alt="" />
                <p className='card__body__link'>Voir les Candidatures</p>
            </div>
        </div>
    )
}

export default Cards;