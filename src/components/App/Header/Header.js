import menu from '../../../assets/menu.svg';
import '../Header/Header.scss';


const Header = ({toggleMain}) => {
    return (
        <>
            <header className='header__content'>

                <div className='header__menuContent'>

                    <h1 className='header__title'>Missions
                        <span className='header__subtitle'>7</span>
                    </h1>

                    <button className='header__button' type="submit" onClick={toggleMain}>
                        <img className='header__img' src={menu} alt="" />
                    </button>

                </div>

                <nav >
                    <ul className='nav__container'>
                        <div className='nav__linkOn'>
                            <li className='nav__link'><a href="" className='nav__link'>A pourvoir</a></li>
                        </div>

                        <li className='nav__link'><a href="" className='nav__link'>En cours</a></li>
                        <li className='nav__link'><a href="" className='nav__link'>A venir</a></li>
                        <li className='nav__link'><a href="" className='nav__link'>Terminées</a></li>
                        <li className='nav__link'><a href="" className='nav__link'>Annulées</a></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header;