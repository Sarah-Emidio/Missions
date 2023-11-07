import { useEffect, useState } from "react";
import Main from "../components/App/Main/Main";
import Header from "../components/App/Header/Header";
import SearchFiltered from "../components/App/SearchFiltered/SearchFiltered";
import Tables from "../components/App/Tables/Tables";
import Cards from "../components/App/Cards/Cards";

import '../Pages/Missions.scss';

const Missions = () => {
    const [showMain, setShowMain] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth <= 831) {
            setShowMain(false);
        } else {
            setShowMain(true);
        }
    }, [windowWidth]);

    const toggleMain = () => {
        setShowMain(!showMain);
    }

    return (
        <>
            <div className="container">
                {showMain && <Main toggleMain={toggleMain} />}
                <div className="main__content">
                    <Header toggleMain={toggleMain} />
                    <SearchFiltered />
                    <div className="desktop">
                        <Tables />
                    </div>
                    <div className="mobile">
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Missions;