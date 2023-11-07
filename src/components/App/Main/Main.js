import '../Main/Main.scss';

const Main = ({toggleMain}) => {
    return (
        <div className='main__container'>

            <div className='main__header'>
                <span className='main__title'>
                    <span className='main__logo'>
                        C
                    </span>
                    Ciel bleu
                </span> 
                <button type="submit" className='main__buttonHide' onClick={toggleMain}>X</button>

            </div>

            <div className='main__border'></div>

            <div className='main_buttonContainer'>
                <button className='main__button' type="button">
                    + Nouvelle mission
                </button>
            </div>


            <nav className='main__linkContent'>
                <ul className='main__secondLink'>
                    <li className='main__link'><a href="/" className='main__link'>Tableau de bord</a></li>
                    
                    <li className='main__link'><a href="/" className='main__link'>Planning</a></li>
                    
                    <li className='main__linkColor'><a href="/" className='main__link'>Missions</a></li>
                    
                    <li className='main__link'><a href="/" className='main__link'>Factures</a></li>
                </ul>

                <ul className='main__secondLink'>
                    <li className='main__link'><a href="/" className='main__link'>Paramètres</a></li>
                    <li className='main__link'><a href="/" className='main__link'>Aide</a></li>
                    <li className='main__link'><a href="/" className='main__link'>Factures</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Main;