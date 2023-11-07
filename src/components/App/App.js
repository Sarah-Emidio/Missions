import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "../App/reset.scss";
import '../App/mixin.scss';
import '../App/global.scss';

import Missions from "../../Pages/Missions";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Missions />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;