import { useEffect, useState } from "react";
import Main from "../components/App/Main/Main";
import Header from "../components/App/Header/Header";
import SearchFiltered from "../components/App/SearchFiltered/SearchFiltered";

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
                {showMain && <Main toggleMain={toggleMain}/>}
                <Header toggleMain={toggleMain}/>
                <SearchFiltered />
            </div>
        </>
    )
}

export default Missions;