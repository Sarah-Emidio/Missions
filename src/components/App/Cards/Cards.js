import '../Cards/Cards.scss';
import Candidat from '../../../assets/Candidat.png';


const Cards = () => {
    return(
        <div className="card">
        <div className="card__row">
            <div className="card__header"><input type="checkbox" />Table header</div>
            <div className="card__header">Tableau Header</div>
            <div className="card__header">Tableau Header</div>
            <div className="card__header">Tableau Header</div>
            <div className="card__header">Candidat</div>
        </div>
        <div className="card__row">
            <div className="card__cell"><input type="checkbox" />Table Cell</div>
            <div className="card__cell">Text<span className="badge"> Badge</span></div>
            <div className="card__cell">Table Cell 2</div>
            <div className="card__cell">Table Cell 3</div>
            <div className="card__cell"><img className="card__img" src={Candidat} alt=""  /></div>
        </div>
    </div>
    )
}

export default Cards;