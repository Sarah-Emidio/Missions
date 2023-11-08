import '../Cards/Cards.scss';
import Candidat from '../../../assets/Candidat.png';


const Cards = () => {
    return (
        <div className="card">
            <div className="card__head">
                <div className='card__head__metier'>
                    <p>Métiers <span className='card__head__price'>00,00€</span></p>
                </div>

                <div className='card__head__date'>
                    <p>Date <span>Badge</span><span></span></p>
                </div>
            </div>

            <div className="card__body">
                <img className="card__body__img" src={Candidat} alt="" />
                <p className='card___body__link'>Voir les Candidatures</p>
            </div>
        </div>
    )
}

export default Cards;