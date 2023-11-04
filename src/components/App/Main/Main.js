import '../Main/Main.scss';

const Main = () => {
    return (
        <div className='main__container'>

            <div className='main__header'>
                <span className='main__title'><span className='main__logo'>C</span>
                    Ciel bleu
                </span>

            </div>

            <div className='main__border'></div>

            <div className='main_buttonContainer'>
                <button className='main__button' type="button">
                    + Nouvelle mission
                </button>
            </div>


            <nav className='main__linkContent'>
                <ul>
                    <li className='main__link'>Tableau de bord</li>
                    <li className='main__link'>Planning</li>
                    <li className='main__linkColor'>Missions</li>
                    <li className='main__link'>Factures</li>
                </ul>

                <ul>
                    <li className='main__link'>Paramètres</li>
                    <li className='main__link'>Aide</li>
                    <li className='main__link'>Factures</li>
                </ul>
            </nav>

        </div>
    )
}

export default Main;