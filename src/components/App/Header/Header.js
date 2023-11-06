import menu from '../../../assets/menu.svg';
import '../Header/Header.scss';


const Header = () => {
    return (
        <>
            <header className='header__content'>

                <div className='header__menuContent'>

                    <h1 className='header__title'>Missions
                        <span className='header__subtitle'>7</span>
                    </h1>

                    <button className='header__button' type="submit">
                        <img className='header__img' src={menu} alt="" />
                    </button>
               
                </div>

                <nav >
                    <ul className='nav__container'>
                        <li>A pourvoir</li>
                        <li>En cours</li>
                        <li>A venir</li>
                        <li>Terminées</li>
                        <li>Annulées</li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header;